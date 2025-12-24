"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation"; // <-- useParams works here

import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import FaqSection from "@/components/common/FaqSection";
import ProductDetailPage from "@/components/sections/productDetail/ProductDetail";
import FeaturedProducts from "@/components/sections/shop/FeaturedProducts";

import { fetchDetailPage } from "@/store/thunk/detailThunk";

export default function ProductDetailClient() {
    const { id } = useParams(); // get product ID from URL
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.detail);

    useEffect(() => {
    if (id) {
      dispatch(fetchDetailPage(Number(id))); // convert id to number
    }
  }, [id, dispatch]);

    if (loading || !data) return <p>Loading...</p>;

    return (
        <>
            <HeroSection title={data.name} bg="/images/banners/shop.jpg" alt="Banner Image" />
            <ProductDetailPage product={data} />
            <FeaturedProducts />
            {data?.testimonials?.length > 0 && (
                <div className="bg-[rgba(241,241,241,0.6)]">
                    <TestimonialSection testimonials={data.testimonials} />
                </div>
            )}
            <FaqSection faqs={data?.faqs} />
        </>
    );
}
