import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import OurServices from "@/components/sections/services/OurServices";
import Packages from "@/components/sections/services/Packages";
import PopularService from "@/components/sections/services/PopularServices";

export default function service () {
    return (
        <>
            <HeroSection title="Our Veterinary Services" bg="/images/banners/service.jpg" alt="Service Banner" />
            <OurServices />
            <Packages />
            <PopularService />
            <div className="bg-[rgba(241,241,241,0.6)]">
                <TestimonialSection />
            </div>
            <FaqSection />
        </>
    )
}