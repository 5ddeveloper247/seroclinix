import ArticleSection from "@/components/sections/blog/ArticleSection"
import HeroSection from "@/components/common/HeroSection"
import LatestPost from "@/components/sections/blog/LatestPost"

export default function blog () {
    return (
        <>
            <HeroSection title="Blog Coming Soon" bg="/images/home/home-hero-3.jpg" alt="Blog Banner" />
            <LatestPost />
            <ArticleSection />
        </>
    )
}