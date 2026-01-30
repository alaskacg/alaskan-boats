import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ECOSYSTEM_ENDPOINT = "https://jneflbektcqalwhgfuyo.supabase.co/functions/v1/ecosystem-listings";

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { listing } = await req.json();

    if (!listing) {
      console.error("No listing data provided");
      return new Response(
        JSON.stringify({ error: "No listing data provided" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log("Syncing listing to ecosystem hub:", listing.id);

    // Send listing to the central ecosystem hub
    const response = await fetch(ECOSYSTEM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_site: 'alaskan-boats',
        listing: {
          id: listing.id,
          title: listing.title,
          description: listing.description,
          price: listing.price,
          category: listing.category_id,
          region: listing.region,
          images: listing.images || [],
          contact_name: listing.contact_name,
          contact_email: listing.contact_email,
          status: listing.status,
          created_at: listing.created_at,
          expires_at: listing.expires_at,
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ecosystem sync failed:", response.status, errorText);
      // Don't fail the user's request if sync fails - just log it
      return new Response(
        JSON.stringify({ success: false, error: "Ecosystem sync failed", details: errorText }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const result = await response.json();
    console.log("Ecosystem sync successful:", result);

    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Error in ecosystem-sync:", error);
    // Don't fail the user's request if sync fails
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
