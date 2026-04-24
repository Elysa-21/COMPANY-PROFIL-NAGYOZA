import HeroSection from "../components/HeroSection";
import WaveDivider from "../components/WaveDivider";
import AboutUsSection from "../components/AboutUsSection";
import ProductSection from "../components/ProductSection";
import AdvantagesSection from "../components/AdvantagesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="size-full overflow-x-hidden bg-[#fff8fb]">
      <main className="w-full">
        <HeroSection />
        <WaveDivider color="white" />
        <AboutUsSection />
        <WaveDivider flip={true} color="pink" />
        <ProductSection />
        <WaveDivider color="fuchsia" />
        <AdvantagesSection />
        <WaveDivider flip={true} color="pink" />
        <TestimonialsSection />
        <WaveDivider color="white" />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
