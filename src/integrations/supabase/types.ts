export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      boat_makes: {
        Row: {
          country: string | null
          created_at: string
          description: string | null
          founded_year: number | null
          id: string
          is_active: boolean | null
          name: string
          website: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          description?: string | null
          founded_year?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          website?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          description?: string | null
          founded_year?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          website?: string | null
        }
        Relationships: []
      }
      boat_models: {
        Row: {
          alaska_notes: string | null
          alaska_suitability_score: number | null
          base_msrp: number | null
          beam_ft: number | null
          category: string
          common_uses: string[] | null
          cons: string[] | null
          created_at: string
          draft_ft: number | null
          features: string[] | null
          fuel_capacity_gal: number | null
          hull_material: string | null
          hull_type: string | null
          id: string
          is_active: boolean | null
          length_max_ft: number | null
          length_min_ft: number | null
          maintenance_notes: string | null
          make_id: string
          max_year: number | null
          min_year: number | null
          name: string
          passenger_capacity: number | null
          propulsion_type: string | null
          pros: string[] | null
          subcategory: string | null
          weight_lbs: number | null
        }
        Insert: {
          alaska_notes?: string | null
          alaska_suitability_score?: number | null
          base_msrp?: number | null
          beam_ft?: number | null
          category: string
          common_uses?: string[] | null
          cons?: string[] | null
          created_at?: string
          draft_ft?: number | null
          features?: string[] | null
          fuel_capacity_gal?: number | null
          hull_material?: string | null
          hull_type?: string | null
          id?: string
          is_active?: boolean | null
          length_max_ft?: number | null
          length_min_ft?: number | null
          maintenance_notes?: string | null
          make_id: string
          max_year?: number | null
          min_year?: number | null
          name: string
          passenger_capacity?: number | null
          propulsion_type?: string | null
          pros?: string[] | null
          subcategory?: string | null
          weight_lbs?: number | null
        }
        Update: {
          alaska_notes?: string | null
          alaska_suitability_score?: number | null
          base_msrp?: number | null
          beam_ft?: number | null
          category?: string
          common_uses?: string[] | null
          cons?: string[] | null
          created_at?: string
          draft_ft?: number | null
          features?: string[] | null
          fuel_capacity_gal?: number | null
          hull_material?: string | null
          hull_type?: string | null
          id?: string
          is_active?: boolean | null
          length_max_ft?: number | null
          length_min_ft?: number | null
          maintenance_notes?: string | null
          make_id?: string
          max_year?: number | null
          min_year?: number | null
          name?: string
          passenger_capacity?: number | null
          propulsion_type?: string | null
          pros?: string[] | null
          subcategory?: string | null
          weight_lbs?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "boat_models_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "boat_makes"
            referencedColumns: ["id"]
          },
        ]
      }
      boat_value_estimates: {
        Row: {
          condition: string
          created_at: string
          high_value: number
          id: string
          last_updated: string
          low_value: number
          mid_value: number
          model_id: string
          region: string | null
          source: string | null
          year: number
        }
        Insert: {
          condition: string
          created_at?: string
          high_value: number
          id?: string
          last_updated?: string
          low_value: number
          mid_value: number
          model_id: string
          region?: string | null
          source?: string | null
          year: number
        }
        Update: {
          condition?: string
          created_at?: string
          high_value?: number
          id?: string
          last_updated?: string
          low_value?: number
          mid_value?: number
          model_id?: string
          region?: string | null
          source?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "boat_value_estimates_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "boat_models"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          slug: string
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          slug: string
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          sort_order?: number | null
        }
        Relationships: []
      }
      dealer_agreement_acceptances: {
        Row: {
          accepted_at: string
          agreement_id: string
          dealer_id: string
          id: string
          ip_address: string | null
          user_agent: string | null
        }
        Insert: {
          accepted_at?: string
          agreement_id: string
          dealer_id: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          accepted_at?: string
          agreement_id?: string
          dealer_id?: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_agreement_acceptances_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "dealer_agreements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dealer_agreement_acceptances_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_agreements: {
        Row: {
          content: string
          created_at: string
          effective_date: string
          id: string
          is_current: boolean | null
          title: string
          version: string
        }
        Insert: {
          content: string
          created_at?: string
          effective_date: string
          id?: string
          is_current?: boolean | null
          title: string
          version: string
        }
        Update: {
          content?: string
          created_at?: string
          effective_date?: string
          id?: string
          is_current?: boolean | null
          title?: string
          version?: string
        }
        Relationships: []
      }
      dealer_plans: {
        Row: {
          created_at: string
          features: string[]
          id: string
          is_active: boolean | null
          max_listings: number | null
          name: string
          price_annual: number | null
          price_monthly: number
          sort_order: number | null
        }
        Insert: {
          created_at?: string
          features: string[]
          id?: string
          is_active?: boolean | null
          max_listings?: number | null
          name: string
          price_annual?: number | null
          price_monthly: number
          sort_order?: number | null
        }
        Update: {
          created_at?: string
          features?: string[]
          id?: string
          is_active?: boolean | null
          max_listings?: number | null
          name?: string
          price_annual?: number | null
          price_monthly?: number
          sort_order?: number | null
        }
        Relationships: []
      }
      dealers: {
        Row: {
          address_line1: string
          address_line2: string | null
          business_license: string
          business_name: string
          city: string
          contact_email: string
          contact_name: string
          contact_phone: string
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          plan_id: string | null
          rating_average: number | null
          rating_count: number | null
          rejection_reason: string | null
          state: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_ends_at: string | null
          subscription_started_at: string | null
          subscription_status: string
          total_listings: number | null
          total_sales: number | null
          updated_at: string
          user_id: string
          verification_status: string
          verified_at: string | null
          verified_by: string | null
          website: string | null
          zip_code: string
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          business_license: string
          business_name: string
          city: string
          contact_email: string
          contact_name: string
          contact_phone: string
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          plan_id?: string | null
          rating_average?: number | null
          rating_count?: number | null
          rejection_reason?: string | null
          state?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_ends_at?: string | null
          subscription_started_at?: string | null
          subscription_status?: string
          total_listings?: number | null
          total_sales?: number | null
          updated_at?: string
          user_id: string
          verification_status?: string
          verified_at?: string | null
          verified_by?: string | null
          website?: string | null
          zip_code: string
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          business_license?: string
          business_name?: string
          city?: string
          contact_email?: string
          contact_name?: string
          contact_phone?: string
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          plan_id?: string | null
          rating_average?: number | null
          rating_count?: number | null
          rejection_reason?: string | null
          state?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_ends_at?: string | null
          subscription_started_at?: string | null
          subscription_status?: string
          total_listings?: number | null
          total_sales?: number | null
          updated_at?: string
          user_id?: string
          verification_status?: string
          verified_at?: string | null
          verified_by?: string | null
          website?: string | null
          zip_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "dealers_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dealer_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      listings: {
        Row: {
          category_id: string | null
          condition: string | null
          contact_email: string
          contact_name: string
          contact_phone: string | null
          created_at: string
          dealer_id: string | null
          description: string
          engine_type: string | null
          expires_at: string | null
          featured_until: string | null
          hours: number | null
          id: string
          images: string[] | null
          is_dealer_listing: boolean | null
          length_ft: number | null
          listing_type: Database["public"]["Enums"]["listing_type"]
          location: string | null
          make: string | null
          model: string | null
          payment_id: string | null
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          price: number
          region: string
          status: Database["public"]["Enums"]["listing_status"]
          title: string
          updated_at: string
          user_id: string
          videos: string[] | null
          views: number | null
          year: number | null
        }
        Insert: {
          category_id?: string | null
          condition?: string | null
          contact_email: string
          contact_name: string
          contact_phone?: string | null
          created_at?: string
          dealer_id?: string | null
          description: string
          engine_type?: string | null
          expires_at?: string | null
          featured_until?: string | null
          hours?: number | null
          id?: string
          images?: string[] | null
          is_dealer_listing?: boolean | null
          length_ft?: number | null
          listing_type?: Database["public"]["Enums"]["listing_type"]
          location?: string | null
          make?: string | null
          model?: string | null
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          price: number
          region: string
          status?: Database["public"]["Enums"]["listing_status"]
          title: string
          updated_at?: string
          user_id: string
          videos?: string[] | null
          views?: number | null
          year?: number | null
        }
        Update: {
          category_id?: string | null
          condition?: string | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          created_at?: string
          dealer_id?: string | null
          description?: string
          engine_type?: string | null
          expires_at?: string | null
          featured_until?: string | null
          hours?: number | null
          id?: string
          images?: string[] | null
          is_dealer_listing?: boolean | null
          length_ft?: number | null
          listing_type?: Database["public"]["Enums"]["listing_type"]
          location?: string | null
          make?: string | null
          model?: string | null
          payment_id?: string | null
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          price?: number
          region?: string
          status?: Database["public"]["Enums"]["listing_status"]
          title?: string
          updated_at?: string
          user_id?: string
          videos?: string[] | null
          views?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      motor_makes: {
        Row: {
          country: string | null
          created_at: string
          description: string | null
          founded_year: number | null
          id: string
          is_active: boolean | null
          motor_types: string[] | null
          name: string
          website: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          description?: string | null
          founded_year?: number | null
          id?: string
          is_active?: boolean | null
          motor_types?: string[] | null
          name: string
          website?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          description?: string | null
          founded_year?: number | null
          id?: string
          is_active?: boolean | null
          motor_types?: string[] | null
          name?: string
          website?: string | null
        }
        Relationships: []
      }
      motor_models: {
        Row: {
          alaska_cold_weather_rating: number | null
          base_msrp: number | null
          common_issues: string[] | null
          cons: string[] | null
          created_at: string
          cylinders: number | null
          displacement_cc: number | null
          features: string[] | null
          fuel_consumption_gph: number | null
          fuel_type: string | null
          horsepower: number
          id: string
          is_active: boolean | null
          maintenance_notes: string | null
          make_id: string
          max_year: number | null
          min_year: number | null
          motor_type: string
          name: string
          pros: string[] | null
          service_interval_hours: number | null
          shaft_length: string | null
          weight_lbs: number | null
        }
        Insert: {
          alaska_cold_weather_rating?: number | null
          base_msrp?: number | null
          common_issues?: string[] | null
          cons?: string[] | null
          created_at?: string
          cylinders?: number | null
          displacement_cc?: number | null
          features?: string[] | null
          fuel_consumption_gph?: number | null
          fuel_type?: string | null
          horsepower: number
          id?: string
          is_active?: boolean | null
          maintenance_notes?: string | null
          make_id: string
          max_year?: number | null
          min_year?: number | null
          motor_type: string
          name: string
          pros?: string[] | null
          service_interval_hours?: number | null
          shaft_length?: string | null
          weight_lbs?: number | null
        }
        Update: {
          alaska_cold_weather_rating?: number | null
          base_msrp?: number | null
          common_issues?: string[] | null
          cons?: string[] | null
          created_at?: string
          cylinders?: number | null
          displacement_cc?: number | null
          features?: string[] | null
          fuel_consumption_gph?: number | null
          fuel_type?: string | null
          horsepower?: number
          id?: string
          is_active?: boolean | null
          maintenance_notes?: string | null
          make_id?: string
          max_year?: number | null
          min_year?: number | null
          motor_type?: string
          name?: string
          pros?: string[] | null
          service_interval_hours?: number | null
          shaft_length?: string | null
          weight_lbs?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "motor_models_make_id_fkey"
            columns: ["make_id"]
            isOneToOne: false
            referencedRelation: "motor_makes"
            referencedColumns: ["id"]
          },
        ]
      }
      motor_value_estimates: {
        Row: {
          condition: string
          created_at: string
          high_value: number
          hours_range_high: number | null
          hours_range_low: number | null
          id: string
          last_updated: string
          low_value: number
          mid_value: number
          model_id: string
          source: string | null
          year: number
        }
        Insert: {
          condition: string
          created_at?: string
          high_value: number
          hours_range_high?: number | null
          hours_range_low?: number | null
          id?: string
          last_updated?: string
          low_value: number
          mid_value: number
          model_id: string
          source?: string | null
          year: number
        }
        Update: {
          condition?: string
          created_at?: string
          high_value?: number
          hours_range_high?: number | null
          hours_range_low?: number | null
          id?: string
          last_updated?: string
          low_value?: number
          mid_value?: number
          model_id?: string
          source?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "motor_value_estimates_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "motor_models"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          description: string | null
          id: string
          listing_id: string | null
          metadata: Json | null
          payment_type: string
          status: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          listing_id?: string | null
          metadata?: Json | null
          payment_type: string
          status?: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          listing_id?: string | null
          metadata?: Json | null
          payment_type?: string
          status?: Database["public"]["Enums"]["payment_status"]
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          id: string
          setting_key: string
          setting_value: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          setting_key: string
          setting_value?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          setting_key?: string
          setting_value?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      listing_status: "pending" | "active" | "sold" | "expired" | "rejected"
      listing_type: "standard" | "featured"
      payment_status: "pending" | "completed" | "failed" | "refunded"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      listing_status: ["pending", "active", "sold", "expired", "rejected"],
      listing_type: ["standard", "featured"],
      payment_status: ["pending", "completed", "failed", "refunded"],
    },
  },
} as const
