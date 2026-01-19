import HeroSection from "@/components/common/HeroSection";
import About from "@/components/sections/partner/About";
import InquiryForm from "@/components/sections/partner/InquiryForm";
import WhyInvest from "@/components/sections/partner/WhyInvest";


export default function Partners () {
    return (
        <>
            <HeroSection title="Become A Partner" bg="/images/banners/contact.jpg" alt="Contact Banner" />
            <About />
            <WhyInvest />
            <InquiryForm />
        </>
    )
}