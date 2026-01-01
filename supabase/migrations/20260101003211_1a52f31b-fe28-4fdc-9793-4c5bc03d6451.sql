-- Create boat makes table
CREATE TABLE public.boat_makes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    country text,
    founded_year integer,
    description text,
    website text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create boat models table
CREATE TABLE public.boat_models (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    make_id uuid REFERENCES public.boat_makes(id) ON DELETE CASCADE NOT NULL,
    name text NOT NULL,
    category text NOT NULL, -- fishing, cabin-cruiser, commercial, kayak, jet-ski, etc.
    subcategory text, -- more specific type
    min_year integer,
    max_year integer,
    length_min_ft numeric,
    length_max_ft numeric,
    beam_ft numeric,
    draft_ft numeric,
    weight_lbs integer,
    fuel_capacity_gal integer,
    passenger_capacity integer,
    hull_material text, -- aluminum, fiberglass, wood, inflatable, etc.
    hull_type text, -- v-hull, flat-bottom, catamaran, pontoon, etc.
    propulsion_type text, -- outboard, inboard, jet, sail, paddle
    base_msrp numeric,
    common_uses text[], -- sport fishing, commercial fishing, cruising, etc.
    features text[],
    pros text[],
    cons text[],
    maintenance_notes text,
    alaska_suitability_score integer CHECK (alaska_suitability_score >= 1 AND alaska_suitability_score <= 10),
    alaska_notes text, -- specific notes for Alaska use
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(make_id, name)
);

-- Create motor makes table
CREATE TABLE public.motor_makes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    country text,
    founded_year integer,
    description text,
    website text,
    motor_types text[], -- outboard, inboard, sterndrive, jet
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create motor models table
CREATE TABLE public.motor_models (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    make_id uuid REFERENCES public.motor_makes(id) ON DELETE CASCADE NOT NULL,
    name text NOT NULL,
    motor_type text NOT NULL, -- outboard, inboard, sterndrive, jet
    horsepower integer NOT NULL,
    displacement_cc integer,
    cylinders integer,
    fuel_type text, -- gasoline, diesel, electric
    shaft_length text, -- short, long, extra-long
    weight_lbs integer,
    min_year integer,
    max_year integer,
    base_msrp numeric,
    fuel_consumption_gph numeric,
    features text[],
    pros text[],
    cons text[],
    maintenance_notes text,
    common_issues text[],
    alaska_cold_weather_rating integer CHECK (alaska_cold_weather_rating >= 1 AND alaska_cold_weather_rating <= 10),
    service_interval_hours integer,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(make_id, name, horsepower)
);

-- Create boat value estimates table for tracking depreciation curves
CREATE TABLE public.boat_value_estimates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    model_id uuid REFERENCES public.boat_models(id) ON DELETE CASCADE NOT NULL,
    year integer NOT NULL,
    condition text NOT NULL, -- excellent, good, fair, poor
    low_value numeric NOT NULL,
    mid_value numeric NOT NULL,
    high_value numeric NOT NULL,
    source text, -- nada, bluebook, market-analysis
    region text DEFAULT 'alaska',
    last_updated timestamp with time zone NOT NULL DEFAULT now(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(model_id, year, condition, region)
);

-- Create motor value estimates table
CREATE TABLE public.motor_value_estimates (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    model_id uuid REFERENCES public.motor_models(id) ON DELETE CASCADE NOT NULL,
    year integer NOT NULL,
    condition text NOT NULL, -- excellent, good, fair, poor
    hours_range_low integer,
    hours_range_high integer,
    low_value numeric NOT NULL,
    mid_value numeric NOT NULL,
    high_value numeric NOT NULL,
    source text,
    last_updated timestamp with time zone NOT NULL DEFAULT now(),
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(model_id, year, condition)
);

-- Create dealer subscription plans table
CREATE TABLE public.dealer_plans (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL UNIQUE,
    price_monthly numeric NOT NULL,
    price_annual numeric,
    max_listings integer, -- null = unlimited
    features text[] NOT NULL,
    is_active boolean DEFAULT true,
    sort_order integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create dealers table
CREATE TABLE public.dealers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    plan_id uuid REFERENCES public.dealer_plans(id),
    business_name text NOT NULL,
    business_license text NOT NULL,
    contact_name text NOT NULL,
    contact_email text NOT NULL,
    contact_phone text NOT NULL,
    address_line1 text NOT NULL,
    address_line2 text,
    city text NOT NULL,
    state text NOT NULL DEFAULT 'AK',
    zip_code text NOT NULL,
    website text,
    description text,
    logo_url text,
    verification_status text NOT NULL DEFAULT 'pending', -- pending, verified, rejected, suspended
    verified_at timestamp with time zone,
    verified_by uuid,
    rejection_reason text,
    subscription_status text NOT NULL DEFAULT 'inactive', -- inactive, active, past_due, cancelled
    subscription_started_at timestamp with time zone,
    subscription_ends_at timestamp with time zone,
    stripe_customer_id text,
    stripe_subscription_id text,
    total_listings integer DEFAULT 0,
    total_sales integer DEFAULT 0,
    rating_average numeric,
    rating_count integer DEFAULT 0,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(user_id)
);

-- Create dealer agreement versions table
CREATE TABLE public.dealer_agreements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    version text NOT NULL UNIQUE,
    title text NOT NULL,
    content text NOT NULL, -- markdown content
    effective_date date NOT NULL,
    is_current boolean DEFAULT false,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create dealer agreement acceptances table
CREATE TABLE public.dealer_agreement_acceptances (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    dealer_id uuid REFERENCES public.dealers(id) ON DELETE CASCADE NOT NULL,
    agreement_id uuid REFERENCES public.dealer_agreements(id) ON DELETE CASCADE NOT NULL,
    accepted_at timestamp with time zone NOT NULL DEFAULT now(),
    ip_address text,
    user_agent text,
    UNIQUE(dealer_id, agreement_id)
);

-- Enable RLS
ALTER TABLE public.boat_makes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boat_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.motor_makes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.motor_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.boat_value_estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.motor_value_estimates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dealer_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dealers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dealer_agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dealer_agreement_acceptances ENABLE ROW LEVEL SECURITY;

-- RLS Policies for boat/motor data (public read, admin write)
CREATE POLICY "Boat makes are viewable by everyone" ON public.boat_makes FOR SELECT USING (true);
CREATE POLICY "Admins can manage boat makes" ON public.boat_makes FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Boat models are viewable by everyone" ON public.boat_models FOR SELECT USING (true);
CREATE POLICY "Admins can manage boat models" ON public.boat_models FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Motor makes are viewable by everyone" ON public.motor_makes FOR SELECT USING (true);
CREATE POLICY "Admins can manage motor makes" ON public.motor_makes FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Motor models are viewable by everyone" ON public.motor_models FOR SELECT USING (true);
CREATE POLICY "Admins can manage motor models" ON public.motor_models FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Boat value estimates are viewable by everyone" ON public.boat_value_estimates FOR SELECT USING (true);
CREATE POLICY "Admins can manage boat value estimates" ON public.boat_value_estimates FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Motor value estimates are viewable by everyone" ON public.motor_value_estimates FOR SELECT USING (true);
CREATE POLICY "Admins can manage motor value estimates" ON public.motor_value_estimates FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for dealer system
CREATE POLICY "Dealer plans are viewable by everyone" ON public.dealer_plans FOR SELECT USING (true);
CREATE POLICY "Admins can manage dealer plans" ON public.dealer_plans FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Verified dealers are viewable by everyone" ON public.dealers FOR SELECT 
USING (verification_status = 'verified' OR auth.uid() = user_id OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can create their dealer application" ON public.dealers FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own dealer profile" ON public.dealers FOR UPDATE 
USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete dealers" ON public.dealers FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Dealer agreements are viewable by everyone" ON public.dealer_agreements FOR SELECT USING (true);
CREATE POLICY "Admins can manage dealer agreements" ON public.dealer_agreements FOR ALL USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can view their agreement acceptances" ON public.dealer_agreement_acceptances FOR SELECT 
USING (dealer_id IN (SELECT id FROM public.dealers WHERE user_id = auth.uid()) OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can accept agreements" ON public.dealer_agreement_acceptances FOR INSERT 
WITH CHECK (dealer_id IN (SELECT id FROM public.dealers WHERE user_id = auth.uid()));

-- Add dealer_id to listings table for dealer association
ALTER TABLE public.listings ADD COLUMN dealer_id uuid REFERENCES public.dealers(id);
ALTER TABLE public.listings ADD COLUMN is_dealer_listing boolean DEFAULT false;

-- Create index for faster lookups
CREATE INDEX idx_listings_dealer_id ON public.listings(dealer_id);
CREATE INDEX idx_boat_models_make_id ON public.boat_models(make_id);
CREATE INDEX idx_motor_models_make_id ON public.motor_models(make_id);
CREATE INDEX idx_boat_models_category ON public.boat_models(category);
CREATE INDEX idx_dealers_verification_status ON public.dealers(verification_status);
CREATE INDEX idx_dealers_subscription_status ON public.dealers(subscription_status);

-- Trigger for updated_at
CREATE TRIGGER update_dealers_updated_at BEFORE UPDATE ON public.dealers
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();