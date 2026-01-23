import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
};

// Validate API key from network_sites table
async function validateNetworkApiKey(supabase: any, apiKey: string | null): Promise<{ valid: boolean; site?: any }> {
  if (!apiKey) {
    return { valid: false };
  }

  const { data: site, error } = await supabase
    .from('network_sites')
    .select('site_code, site_name, region')
    .eq('api_key', apiKey)
    .eq('is_active', true)
    .single();

  if (error || !site) {
    return { valid: false };
  }

  return { valid: true, site };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get API key from header
    const apiKey = req.headers.get('x-api-key');
    
    const { action, site_code, listing_id } = await req.json();

    console.log(`Network sync action: ${action}, site: ${site_code}, listing: ${listing_id}`);

    // Validate API key for all actions that return sensitive data
    const sensitiveActions = ['fetch_listings', 'fetch_regional_listings', 'get_network_sites', 'get_statewide_feed'];
    
    if (sensitiveActions.includes(action)) {
      const { valid, site } = await validateNetworkApiKey(supabase, apiKey);
      
      if (!valid) {
        console.log(`Unauthorized access attempt for action: ${action}`);
        return new Response(
          JSON.stringify({ success: false, error: 'Unauthorized: Invalid or missing API key' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      console.log(`Authorized request from site: ${site?.site_name}`);
    }

    switch (action) {
      case 'fetch_listings': {
        // Fetch listings for a specific region/site that are set to syndicate
        const { data: listings, error } = await supabase
          .from('listings')
          .select('*')
          .eq('status', 'active')
          .eq('payment_status', 'paid')
          .eq('syndicate_to_statewide', true)
          .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(
          JSON.stringify({ success: true, listings }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'fetch_regional_listings': {
        // Fetch listings for a specific region only
        const { data: site } = await supabase
          .from('network_sites')
          .select('region')
          .eq('site_code', site_code)
          .single();

        if (!site) {
          return new Response(
            JSON.stringify({ success: false, error: 'Site not found' }),
            { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { data: listings, error } = await supabase
          .from('listings')
          .select('*')
          .eq('status', 'active')
          .eq('payment_status', 'paid')
          .eq('region', site.region)
          .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(
          JSON.stringify({ success: true, listings, region: site.region }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'get_network_sites': {
        // Get all active network sites
        const { data: sites, error } = await supabase
          .from('network_sites')
          .select('site_code, site_name, domain, region, is_active')
          .eq('is_active', true)
          .order('site_name');

        if (error) throw error;

        return new Response(
          JSON.stringify({ success: true, sites }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'validate_api_key': {
        // Validate an API key for a network site - this one requires the key in body
        const body = await req.json().catch(() => ({}));
        const keyToValidate = body.api_key || apiKey;
        
        const { valid, site } = await validateNetworkApiKey(supabase, keyToValidate);

        return new Response(
          JSON.stringify({ success: true, valid, site: valid ? site : undefined }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'get_statewide_feed': {
        // Get all listings that can be syndicated to the statewide site (aklistings.com)
        const { data: listings, error } = await supabase
          .from('listings')
          .select(`
            id, title, description, price, category, region, location,
            images, contact_email, contact_phone, contact_name,
            source_site, created_at
          `)
          .eq('status', 'active')
          .eq('payment_status', 'paid')
          .eq('syndicate_to_statewide', true)
          .order('created_at', { ascending: false })
          .limit(100);

        if (error) throw error;

        console.log(`Returning ${listings?.length || 0} listings for statewide feed`);

        return new Response(
          JSON.stringify({ 
            success: true, 
            listings,
            count: listings?.length || 0,
            source: 'alcan'
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      default:
        return new Response(
          JSON.stringify({ success: false, error: 'Unknown action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Network sync error:', errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
