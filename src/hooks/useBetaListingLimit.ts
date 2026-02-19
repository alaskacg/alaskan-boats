import { useAuth } from '@/contexts/AuthContext';

const MAX_LISTINGS = 1000;

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

  const isEmailVerified = user?.email_confirmed_at != null;

  return {
    canPost: isEmailVerified,
    currentListings: 0,
    maxListings: MAX_LISTINGS,
    remainingListings: MAX_LISTINGS,
    isEmailVerified,
    loading: false,
  };
};

export default useBetaListingLimit;
