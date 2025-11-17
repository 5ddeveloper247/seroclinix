import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import ContactForm from "@/components/sections/certifiedVet/ContactForm";
import FeaturedVets from "@/components/sections/certifiedVet/FeaturedVets";
import Filters from "@/components/sections/certifiedVet/Filters";
import VetsCard from "@/components/sections/certifiedVet/VetsCard";
import FaqSection from "@/components/common/FaqSection";

export default function CertifiedVet() {
    return (
        <>
            <HeroSection title="Find Certified Vet Techs" bg="/images/banners/certified.jpg" alt="Certified Banned" />
            <Filters />
            <VetsCard />
            <ContactForm />
            <FeaturedVets />
            <div className="bg-[rgba(241,241,241,0.5)]">
                <TestimonialSection />
            </div>
            <FaqSection />
        </>
    )
}