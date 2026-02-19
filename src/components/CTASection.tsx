import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Image, Video, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 ocean-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-deep/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Sell Your Boat?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-4 max-w-2xl mx-auto">
            Reach thousands of Alaskans looking for boats. Post your listing today!
          </p>
          
          <p className="text-muted-foreground text-sm mb-12 max-w-xl mx-auto">
            All listings remain active for the full 60-day period.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-glass rounded-2xl p-6 text-center border-2 border-accent/50 relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Standard</h3>
              <p className="text-muted-foreground text-sm">List your boat</p>
            </div>
            
            <div className="bg-glass rounded-2xl p-6 text-center border-2 border-primary/50 relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Featured</h3>
              <p className="text-muted-foreground text-sm">Premium placement</p>
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

          <p className="text-sm text-muted-foreground mb-6">
            📧 Email verification required
          </p>

          {/* CTA Button */}
          <Link to="/post-listing">
            <Button variant="gold" size="xl" className="group">
              List Your Boat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
