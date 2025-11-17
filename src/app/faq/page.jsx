import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import QuickFind from "@/components/sections/faq/QuickFind";

export default function faq () {
    return (
        <>
            <HeroSection title="FAQ" bg="/images/banners/faq.jpg" alt="FAQ Image" />
            <QuickFind />
            <FaqSection />
        </>
    )
}