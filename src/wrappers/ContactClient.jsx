import FaqSection from "@/components/common/FaqSection";
import FormSection from "@/components/sections/contact/FormSection";
import HeroSection from "@/components/common/HeroSection";

export default function Contact () {
    return (
        <>
            <HeroSection title="Contact" bg="/images/banners/contact.jpg" alt="Contact Banner" />
            <FormSection />
            <FaqSection />
        </>
    )
}