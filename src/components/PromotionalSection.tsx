import { motion } from "framer-motion";
import { AnimatedSection } from "./PageTransition";
import { Sparkles } from "lucide-react";
import AnchorageChronicleAd from "./promotions/AnchorageChronicleAd";
import AlaskaConsultingAd from "./promotions/AlaskaConsultingAd";
import AlaskaListingsAd from "./promotions/AlaskaListingsAd";

const PromotionalSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Partner Network</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Explore Our Alaska Network
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover trusted local resources and services across the Last Frontier
          </p>
        </AnimatedSection>

        {/* Promotional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnchorageChronicleAd />
          <AlaskaConsultingAd />
          <AlaskaListingsAd />
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
