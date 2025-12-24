"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPage } from "@/store/thunk/blogThunk";

import ArticleSection from "@/components/sections/blog/ArticleSection"
import HeroSection from "@/components/common/HeroSection"
import LatestPost from "@/components/sections/blog/LatestPost"

export default function BlogClient() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogPage());
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
            />
            <LatestPost />
            <ArticleSection />
        </>
    )
}