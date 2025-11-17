import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import FeaturedVets from "@/components/sections/vet/FeaturedVets";
import AboutVet from "@/components/sections/vetProfile/AboutVet";

export default function VetProfile() {
    return (
        <>
            <HeroSection title="Malissa T." bg="/images/banners/vet.jpg" alt="Vet Banner" />
            <AboutVet />
            <FeaturedVets />
            <div className="bg-[rgba(241,241,241,0.5)]">
                <TestimonialSection />
            </div>
            <FaqSection />
        </>
    )
}