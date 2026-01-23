-- Add explicit UPDATE policy for payments table
-- This makes the security model clear: payments are immutable for regular users, only admins can modify

CREATE POLICY "Only admins can update payments" 
ON public.payments 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));