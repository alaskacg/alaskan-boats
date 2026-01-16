import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Ship, Waves, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-southeast-harbor.jpg";
import RegionalSearch from "@/components/RegionalSearch";
import InteractiveWaveBackground from "@/components/InteractiveWaveBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Alaska boats and watercraft" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Interactive Wave Background */}
      <InteractiveWaveBackground />

      {/* Animated ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-deep/20 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-ocean-teal/15 rounded-full blur-3xl"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Anchor Logo - Same style as header/footer */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/30"
              whileHover={{ scale: 1.05, rotate: -5 }}
            >
              <Anchor className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* Main heading with wave animation */}
          <motion.div
            className="relative overflow-hidden mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-primary via-ocean-teal to-primary bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Alaskan Boats
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Tagline with typewriter-style reveal */}
          <motion.div 
            className="mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.p 
              className="font-sans text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-medium"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.span
                className="inline-block text-muted-foreground"
                animate={{ 
                  color: ["hsl(var(--muted-foreground))", "hsl(var(--primary))", "hsl(var(--ocean-teal))", "hsl(var(--muted-foreground))"]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                Alaska's Premier Boat Marketplace
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Browse Options Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="/browse?category=fishing" className="group">
              <div className="bg-glass rounded-lg p-4 md:p-5 transition-all duration-300 hover:scale-105 hover:bg-primary/10 border border-border/50 hover:border-primary/50">
                <Ship className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-primary group-hover:animate-float" />
                <span className="font-display text-xs md:text-sm text-foreground block">Fishing Boats</span>
              </div>
            </Link>
            <Link to="/browse?category=cabin-cruisers" className="group">
              <div className="bg-glass rounded-lg p-4 md:p-5 transition-all duration-300 hover:scale-105 hover:bg-primary/10 border border-border/50 hover:border-primary/50">
                <Anchor className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-ocean-teal group-hover:animate-float" />
                <span className="font-display text-xs md:text-sm text-foreground block">Cabin Cruisers</span>
              </div>
            </Link>
            <Link to="/browse" className="group">
              <div className="bg-glass rounded-lg p-4 md:p-5 transition-all duration-300 hover:scale-105 hover:bg-primary/10 border border-border/50 hover:border-primary/50">
                <Waves className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-ocean-steel group-hover:animate-float" />
                <span className="font-display text-xs md:text-sm text-foreground block">All Watercraft</span>
              </div>
            </Link>
            <Link to="/browse?featured=true" className="group">
              <div className="bg-glass rounded-lg p-4 md:p-5 transition-all duration-300 hover:scale-105 hover:bg-accent/10 border border-border/50 hover:border-accent/50">
                <Star className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-accent fill-accent/30 group-hover:animate-float" />
                <span className="font-display text-xs md:text-sm text-foreground block">Featured Boats</span>
              </div>
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <RegionalSearch />
            <Link to="/browse">
              <Button variant="aurora" size="lg" className="group text-white font-semibold shadow-lg">
                Browse Boats
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/post-listing">
              <Button variant="glass" size="lg">
                Sell Your Boat — $20
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div>
              <div className="font-display text-xl md:text-2xl font-bold text-foreground">8+</div>
              <div className="text-muted-foreground text-xs">Boat Types</div>
            </div>
            <div>
              <div className="font-display text-xl md:text-2xl font-bold text-foreground">30+</div>
              <div className="text-muted-foreground text-xs">Alaska Locations</div>
            </div>
            <div>
              <div className="font-display text-xl md:text-2xl font-bold text-foreground">60</div>
              <div className="text-muted-foreground text-xs">Day Listings</div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
