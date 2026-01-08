import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const BETA_MAX_LISTINGS = 5;

interface BetaListingStatus {
  canPost: boolean;
  currentListings: number;
  maxListings: number;
  remainingListings: number;
  isEmailVerified: boolean;
  loading: boolean;
}

export const useBetaListingLimit = (): BetaListingStatus => {
  const { user } = useAuth();
  const [currentListings, setCurrentListings] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListingCount = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { count, error } = await supabase
          .from('listings')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .in('status', ['pending', 'active']);

        if (error) throw error;
        setCurrentListings(count || 0);
      } catch (error) {
        console.error('Error fetching listing count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListingCount();
  }, [user]);

  const isEmailVerified = user?.email_confirmed_at != null;
  const remainingListings = Math.max(0, BETA_MAX_LISTINGS - currentListings);
  const canPost = isEmailVerified && remainingListings > 0;

  return {
    canPost,
    currentListings,
    maxListings: BETA_MAX_LISTINGS,
    remainingListings,
    isEmailVerified,
    loading,
  };
};

export default useBetaListingLimit;
