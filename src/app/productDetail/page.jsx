import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import ProductDetailPage from "@/components/sections/productDetail/ProductDetail";
import FeaturedProducts from "@/components/sections/shop/FeaturedProducts";

export default function productDetail() {
    return (
        <>
            <HeroSection title="Cat Tower" bg="/images/banners/shop.jpg" alt="Banner Image" />
            <ProductDetailPage />
            <FeaturedProducts />
            <div className="bg-black/4">
                <TestimonialSection />
            </div>
            <FaqSection />
        </>
    )
}