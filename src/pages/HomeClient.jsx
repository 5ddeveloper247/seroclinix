"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePage } from "@/store/thunk/homeThunk";

import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import WorkSection from "@/components/sections/home/WorkSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import FaqSection from "@/components/common/FaqSection";

export default function HomeClient() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchHomePage());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WorkSection />

            {/* Only render if testimonials exist */}
            {data?.testimonials?.length > 0 && (
                <TestimonialSection testimonials={data.testimonials} />
            )}

            <FaqSection faqs={data?.faqs} />
        </>
    );
}
