"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicePage } from "@/store/thunk/serviceThunk";

import FaqSection from "@/components/common/FaqSection";
import HeroSection from "@/components/common/HeroSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import OurServices from "@/components/sections/services/OurServices";
import Packages from "@/components/sections/services/Packages";
import PopularService from "@/components/sections/services/PopularServices";

export default function ServicesClient() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.service);

    useEffect(() => {
        dispatch(fetchServicePage());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <HeroSection title="Our Veterinary Services" bg="/images/banners/service.jpg" alt="Service Banner" />
            <OurServices />
            <Packages />
            <PopularService />

            {/* Only render if testimonials exist */}
            {data?.testimonials?.length > 0 && (
                <div className="bg-[rgba(241,241,241,0.6)]">
                    <TestimonialSection testimonials={data.testimonials} />
                </div>
            )}

            <FaqSection faqs={data?.faqs} />
        </>
    );
}