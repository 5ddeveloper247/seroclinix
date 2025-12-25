"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleSection from "@/components/sections/blog/ArticleSection"
import HeroSection from "@/components/common/HeroSection"
import LatestPost from "@/components/sections/blog/LatestPost"

export default function BlogClient() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.blog);

    useEffect(() => {
        let mounted = true;
        (async () => {
            if (!mounted) return;
            const module = await import("@/store/thunk/blogThunk");
            const { fetchBlogPage } = module;
            dispatch(fetchBlogPage());
        })();
        return () => { mounted = false; };
    }, [dispatch]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    const hero = data?.hero?.hero_slide_1;

    return (
        <>
            <HeroSection
                title={hero?.title?.value}
                bg={hero?.image?.value}
                alt="About Banner"
            />
            <LatestPost />
            <ArticleSection />
        </>
    )
}