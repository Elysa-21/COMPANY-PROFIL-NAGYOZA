import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import ProductSection from "../components/ProductSection";
import AdvantagesSection from "../components/AdvantagesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AmbientLayer from "../components/AmbientLayer";

export default function HomePage() {
  return (
    <div className="relative size-full overflow-x-hidden bg-[linear-gradient(180deg,#fff8fb_0%,#fff4f8_30%,#f7eefb_65%,#ffffff_100%)]">
      <main className="w-full">
        <div className="relative">
          <AmbientLayer variant="page" className="absolute inset-0 z-0" />
          <div className="relative z-10">
            <HeroSection />
            <AboutUsSection />
            <ProductSection />
            <AdvantagesSection />
            <TestimonialsSection />
            <ContactSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
