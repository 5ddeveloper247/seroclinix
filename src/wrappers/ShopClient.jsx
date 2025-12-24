"use client";

import HeroSection from "@/components/common/HeroSection";
import FeaturedProducts from "@/components/sections/shop/FeaturedProducts";
import Products from "@/components/sections/shop/Products";
import SpecialOffers from "@/components/sections/shop/SpecialOffers";
import TestimonialSection from "@/components/common/TestimonialSection";
import FaqSection from "@/components/common/FaqSection";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShopClient() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        let mounted = true;
        (async () => {
            if (!mounted) return;
            const module = await import("@/store/thunk/shopThunk");
            const { fetchShopPage } = module;
            dispatch(fetchShopPage());
        })();
        return () => { mounted = false; };
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <HeroSection title="Shop Pet Products" bg="/images/banners/shop.jpg" alt="Shop Banner" />
            <Products />
            <SpecialOffers />
            <FeaturedProducts products={data?.products} />
            {data?.testimonials?.length > 0 && (
                <div className="bg-[rgba(241,241,241,0.6)]">
                    <TestimonialSection testimonials={data.testimonials} />
                </div>
            )}
            <FaqSection faqs={data?.faqs} />
        </>
    )

}