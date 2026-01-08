import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Image, Video, Sparkles, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 ocean-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-deep/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Beta Launch Special</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Sell Your Boat?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Reach thousands of Alaskans looking for boats. During our beta period, list your boat for <strong className="text-accent">FREE!</strong>
          </p>
          
          <p className="text-muted-foreground text-sm mb-12 max-w-xl mx-auto">
            Thank you for your patience as we grow! All beta listings remain active for the full 60-day period.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-glass rounded-2xl p-6 text-center border-2 border-accent/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                BETA FREE
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <Gift className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">$0 Standard</h3>
              <p className="text-muted-foreground text-sm">Free during beta</p>
              <p className="text-xs text-muted-foreground/70 mt-1 line-through">Normally $20</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center border-2 border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                BETA FREE
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">$0 Featured</h3>
              <p className="text-muted-foreground text-sm">Premium placement</p>
              <p className="text-xs text-muted-foreground/70 mt-1 line-through">Normally $100</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ocean-teal/10 mb-4">
                <Clock className="w-6 h-6 text-ocean-teal" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">60 Days</h3>
              <p className="text-muted-foreground text-sm">Active listing duration</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ocean-steel/10 mb-4">
                <Video className="w-6 h-6 text-ocean-steel" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Photos + Video</h3>
              <p className="text-muted-foreground text-sm">Up to 20 images & 3 videos</p>
            </div>
          </div>

          {/* Beta Limit Notice */}
          <p className="text-sm text-muted-foreground mb-6">
            📧 Email verification required • 5 free listings per verified account during beta
          </p>

          {/* CTA Button */}
          <Link to="/post-listing">
            <Button variant="gold" size="xl" className="group">
              List Your Boat Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
