import FaqSection from "@/components/common/FaqSection";
import DetailSection from "@/components/sections/BlogDetail/DetailSection";
import HeroSection from "@/components/common/HeroSection";

export default function blogDetail () {
    return (
        <>
            <HeroSection title="Grooming experts" bg="/images/home/home-hero-3.jpg" alt="Grooming Banner" />
            <DetailSection />
            <FaqSection />
        </>
    )
}