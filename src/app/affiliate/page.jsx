import HeroSection from "@/components/common/HeroSection";
import Overview from "@/components/sections/affiliate/Overview";
import WorkSection from "@/components/sections/affiliate/WorkSection";
import ContactUs from "@/components/sections/affiliate/ContactUs";
import FaqSection from "@/components/common/FaqSection";

export default function Affiliate () {
    return (
        <>
            <HeroSection title="Join Our Affiliate" bg="/images/banners/affiliate.jpg" alt="Affiliate Banner" />
            <WorkSection />
            <Overview />
            <ContactUs />
            <FaqSection />
        </>
    )
}