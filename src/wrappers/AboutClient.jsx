"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroSection from "@/components/common/HeroSection";
import OurMembers from "@/components/sections/about/OurMembers";
import WhoWeAre from "@/components/sections/about/WhoWeAre";
import GalleryAbout from "@/components/sections/about/GalleryAbout";

export default function AboutClient() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.about);

    useEffect(() => {
        // dynamically import the thunk on client-side to avoid build-time circular init
        let mounted = true;
        (async () => {
            if (!mounted) return;
            const module = await import("@/store/thunk/aboutThunk");
            const { fetchAboutPage } = module;
            dispatch(fetchAboutPage());
        })();
        return () => { mounted = false; };
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
            </HeroSection>
            <WhoWeAre />
            <OurMembers />
            <GalleryAbout />
        </>
    );
}
