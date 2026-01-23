-- Fix: Restrict profiles table SELECT to only owner or admin (no public access)
-- This prevents email/phone harvesting

DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;

CREATE POLICY "Users can view own profile or admins all" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'::app_role));