import HeroSection from "@/components/common/HeroSection";
import FeaturedProducts from "@/components/sections/shop/FeaturedProducts";
import Products from "@/components/sections/shop/Products";
import SpecialOffers from "@/components/sections/shop/SpecialOffers";

export default function Shop () {
    return (
        <>
            <HeroSection title="Shop Pet Products" bg="/images/banners/shop.jpg" alt="Shop Banner" />
            <Products />
            <SpecialOffers />
            <FeaturedProducts />
        </>
    )
}