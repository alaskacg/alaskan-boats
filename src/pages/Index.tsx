import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RecentListings from "@/components/RecentListings";
import CTASection from "@/components/CTASection";
import TrustIndicators from "@/components/TrustIndicators";
import SEOHead from "@/components/SEOHead";
import BoatTypesSection from "@/components/BoatTypesSection";
import RegionsShowcase from "@/components/RegionsShowcase";
import AnchorageChronicleAd from "@/components/promotions/AnchorageChronicleAd";
import AlaskaConsultingAd from "@/components/promotions/AlaskaConsultingAd";
import AlaskaListingsAd from "@/components/promotions/AlaskaListingsAd";
import EmpireNetwork from "@/components/EmpireNetwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        
        <BoatTypesSection />
        
        {/* Standalone Ad - Anchorage Chronicle */}
        <div className="container mx-auto px-4 py-6">
          <AnchorageChronicleAd />
        </div>
        
        <RegionsShowcase />
        
        {/* Standalone Ad - Alaska Consulting Group */}
        <div className="container mx-auto px-4 py-6">
          <AlaskaConsultingAd />
        </div>
        
        <RecentListings />
        
        {/* Standalone Ad - Alaska Listings */}
        <div className="container mx-auto px-4 py-6">
          <AlaskaListingsAd />
        </div>
        
        <CTASection />
        <EmpireNetwork currentSite="alaskan-boats" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
