import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Anchor } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./PageTransition";

// Import region images
import juneauImg from "@/assets/regions/juneau.jpg";
import ketchikanImg from "@/assets/regions/ketchikan.jpg";
import sitkaImg from "@/assets/regions/sitka.jpg";
import kodiakImg from "@/assets/regions/kodiak.jpg";
import homerImg from "@/assets/regions/homer.jpg";
import sewardImg from "@/assets/regions/seward.jpg";
import valdezImg from "@/assets/regions/valdez.jpg";
import bristolBayImg from "@/assets/regions/bristol-bay.jpg";

const featuredRegions = [
  {
    id: "juneau",
    name: "Juneau",
    description: "Alaska's capital with world-class fishing",
    image: juneauImg,
    boatCount: "120+",
    region: "Southeast",
  },
  {
    id: "ketchikan",
    name: "Ketchikan",
    description: "Salmon capital of the world",
    image: ketchikanImg,
    boatCount: "95+",
    region: "Southeast",
  },
  {
    id: "sitka",
    name: "Sitka",
    description: "Premier halibut fishing destination",
    image: sitkaImg,
    boatCount: "80+",
    region: "Southeast",
  },
  {
    id: "kodiak",
    name: "Kodiak",
    description: "Commercial fishing hub",
    image: kodiakImg,
    boatCount: "150+",
    region: "Southwest",
  },
  {
    id: "homer",
    name: "Homer",
    description: "Halibut fishing capital",
    image: homerImg,
    boatCount: "110+",
    region: "Southcentral",
  },
  {
    id: "seward",
    name: "Seward",
    description: "Gateway to Kenai Fjords",
    image: sewardImg,
    boatCount: "90+",
    region: "Southcentral",
  },
  {
    id: "valdez",
    name: "Valdez",
    description: "Prince William Sound access",
    image: valdezImg,
    boatCount: "75+",
    region: "Southcentral",
  },
  {
    id: "bristol-bay",
    name: "Bristol Bay",
    description: "World's largest salmon fishery",
    image: bristolBayImg,
    boatCount: "200+",
    region: "Southwest",
  },
];

const RegionsShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--ocean-deep)/0.1)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--ocean-teal)/0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ocean-teal/10 border border-ocean-teal/30 mb-4">
            <MapPin className="w-4 h-4 text-ocean-teal" />
            <span className="text-sm font-medium text-ocean-teal">Alaska Regions</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Shop by Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find boats near you across Alaska's premier fishing and boating destinations
          </p>
        </AnimatedSection>

        {/* Regions Grid - Featured 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featuredRegions.slice(0, 4).map((region, index) => (
            <AnimatedCard key={region.id} index={index}>
              <Link
                to={`/browse?region=${region.id}`}
                className="group block relative rounded-xl overflow-hidden aspect-[4/3] border border-border/30 hover:border-primary/40 transition-all"
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-1 text-primary text-xs mb-1">
                    <MapPin className="w-3 h-3" />
                    {region.region}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-2">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">{region.boatCount} boats</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Regions Grid - Secondary 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredRegions.slice(4).map((region, index) => (
            <AnimatedCard key={region.id} index={index + 4}>
              <Link
                to={`/browse?region=${region.id}`}
                className="group block relative rounded-xl overflow-hidden aspect-[3/2] border border-border/30 hover:border-primary/40 transition-all"
              >
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {region.name}
                  </h3>
                  <span className="text-primary/80 text-xs">{region.boatCount} boats</span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* View All Regions Link */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:bg-primary/90 hover:shadow-lg group"
          >
            <Anchor className="w-4 h-4" />
            Explore All 30+ Locations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegionsShowcase;
