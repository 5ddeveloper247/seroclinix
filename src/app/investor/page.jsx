import HeroSection from "@/components/common/HeroSection";
import About from "@/components/sections/investor/About";
import InvestorForm from "@/components/sections/investor/inquiryForm";
import WhyInvest from "@/components/sections/investor/WhyInvest";

export default function investor () {
    return (
        <>
            <HeroSection title="Investors" bg="/images/banners/investor.jpg" />
            <About />
            <WhyInvest />
            <InvestorForm />
        </>
    )
}