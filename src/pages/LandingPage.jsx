import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import TradingAssets from "../sections/TradingAssets";
import ProfitBanner from "../sections/ProfitBanner";
import Pricing from "../sections/Pricing";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
import TradingPlans from "../sections/TradingPlans";
import PromoBanner from "../components/PromoBanner";
import WhyUs from "../sections/WhyUs";
import ProfitCalculator from "../components/ProfitCalculator";
import TopTraders from "../components/TopTraders";
import FinalCTA from "../components/FinalCTA";

function LandingPage() {
  return (
    <div className="bg-background text-white min-h-screen">

      <Navbar />

      {/* 🔥 THIS WRAPS ALL CONTENT */}
      <div className="pt-20">
        <Hero />
        <Features />
        <ProfitBanner />
        <TradingPlans />
        <PromoBanner />
        <WhyUs />
        <ProfitCalculator />
        <TopTraders />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>

    </div>
  );
}
export default LandingPage;