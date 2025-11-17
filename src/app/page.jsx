import AboutSection from "@/components/sections/home/AboutSection";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WorkSection from "@/components/sections/home/WorkSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import FaqSection from "@/components/common/FaqSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
}
