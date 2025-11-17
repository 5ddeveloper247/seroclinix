import HeroSection from "@/components/common/HeroSection";
import OurMembers from "@/components/sections/about/OurMembers";
import WhoWeAre from "@/components/sections/about/WhoWeAre";

export default function about () {
    return (
        <>
            <HeroSection title="About Us" bg="/images/home/home-hero-2.jpg" alt="About Banner" />
            <WhoWeAre />
            <OurMembers />
        </>
    )
}