import HeroSection from "@/components/common/HeroSection";
import JobListings from "@/components/sections/career/JobListing";

export default function career () {
    return (
        <>
            <HeroSection title="Careers" bg="/images/banners/career.png" alt="Career Image" />
            <JobListings />
        </>
    )
}