import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Anchor, Waves, Wrench, Truck } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./PageTransition";

// Import boat type images
import commercialFishingImg from "@/assets/boats/commercial-fishing.jpg";
import cabinCruiserImg from "@/assets/boats/cabin-cruiser.jpg";
import fishingSkiffImg from "@/assets/boats/fishing-skiff.jpg";
import kayaksImg from "@/assets/boats/kayaks-canoes.jpg";
import jetSkiImg from "@/assets/boats/jet-ski.jpg";
import motorsImg from "@/assets/boats/motors-parts.jpg";

const boatTypes = [
  {
    id: "commercial-vessels",
    name: "Commercial Vessels",
    description: "Seiners, trawlers, and working boats for Alaska's fishing industry",
    image: commercialFishingImg,
    icon: Ship,
    count: "50+",
  },
  {
    id: "cabin-cruisers",
    name: "Cabin Cruisers",
    description: "Luxury cruisers perfect for Alaska's Inside Passage adventures",
    image: cabinCruiserImg,
    icon: Anchor,
    count: "30+",
  },
  {
    id: "fishing-boats",
    name: "Fishing Boats",
    description: "Sport fishing boats and skiffs for salmon, halibut, and more",
    image: fishingSkiffImg,
    icon: Waves,
    count: "80+",
  },
  {
    id: "kayaks-canoes",
    name: "Kayaks & Canoes",
    description: "Paddle craft for exploring Alaska's pristine waterways",
    image: kayaksImg,
    icon: Waves,
    count: "25+",
  },
  {
    id: "jet-skis",
    name: "Jet Skis & PWC",
    description: "Personal watercraft for high-speed fun on the water",
    image: jetSkiImg,
    icon: Waves,
    count: "15+",
  },
  {
    id: "motors",
    name: "Motors & Parts",
    description: "Outboard motors, marine parts, and accessories",
    image: motorsImg,
    icon: Wrench,
    count: "100+",
  },
];

const BoatTypesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-ocean-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-ocean-deep/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Ship className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Boat Types</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Find Your Perfect Vessel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From commercial fishing vessels to recreational kayaks, we have every type of watercraft for Alaska's waters
          </p>
        </AnimatedSection>

        {/* Boat Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boatTypes.map((type, index) => (
            <AnimatedCard key={type.id} index={index}>
              <Link
                to={`/browse?category=${type.id}`}
                className="group block bg-card rounded-xl overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Count badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-md">
                    <span className="font-display text-sm font-bold text-primary">{type.count}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute bottom-3 left-3">
                    <type.icon className="w-8 h-8 text-primary drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                    {type.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {type.description}
                  </p>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* View All Link */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View All Boats
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BoatTypesSection;
