"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutPage } from "@/store/thunk/aboutThunk";

import HeroSection from "@/components/common/HeroSection";
import OurMembers from "@/components/sections/about/OurMembers";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import GalleryAbout from "@/components/sections/about/GalleryAbout";

export default function AboutClient() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.about);

    useEffect(() => {
        dispatch(fetchAboutPage());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const hero = data?.hero?.hero_slide_1;

    return (
        <>
            <HeroSection
                title={hero?.title?.value}
                bg={hero?.image?.value}
                alt="About Banner"
            >
                {/* {hero?.heading?.value && (
                    <p className="text-white mt-4 max-w-[60vw] text-center opacity-80">
                        {hero.heading.value}
                    </p>
                )} */}
            </HeroSection>
            <WhoWeAre />
            <OurMembers />
            <GalleryAbout />
        </>
    );
}
