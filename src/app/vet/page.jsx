import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import ContactForm from "@/components/sections/vet/ContactForm";
import FeaturedVets from "@/components/sections/vet/FeaturedVets";
import Filters from "@/components/sections/vet/Filters";
import VetsCard from "@/components/sections/vet/VetsCard";

export default function Vet() {
    return (
        <>
            <HeroSection title="Find a Vet Near You" bg="/images/banners/vet.jpg" alt="Vet Banner" />
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