import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentListings from "@/components/RecentListings";
import CTASection from "@/components/CTASection";
import TrustIndicators from "@/components/TrustIndicators";
import SEOHead from "@/components/SEOHead";
import BoatTypesSection from "@/components/BoatTypesSection";
import RegionsShowcase from "@/components/RegionsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <BoatTypesSection />
        <RegionsShowcase />
        <RecentListings />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
