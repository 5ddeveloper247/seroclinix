"use client";

import { useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import FaqSection from "@/components/common/FaqSection";
import DetailSection from "@/components/sections/BlogDetail/DetailSection";
import HeroSection from "@/components/common/HeroSection";
import { Skeleton } from "@heroui/react";

export default function BlogDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.blog);

    // Fetch blog data if not already loaded
    useEffect(() => {
        let mounted = true;
        (async () => {
            if (!mounted || data) return;
            const module = await import("@/store/thunk/blogThunk");
            const { fetchBlogPage } = module;
            dispatch(fetchBlogPage());
        })();
        return () => { mounted = false; };
    }, [dispatch, data]);

    // Find the article from featured_articles or articles
    const article = useMemo(() => {
        if (!data || !id) return null;
        
        const featuredArticles = data?.featured_articles || [];
        const articles = data?.articles || [];
        
        // Check featured articles first
        const featuredMatch = featuredArticles.find(
            (item) => item.id?.toString() === id?.toString()
        );
        if (featuredMatch) return featuredMatch;
        
        // Then check regular articles
        const articleMatch = articles.find(
            (item) => item.id?.toString() === id?.toString()
        );
        return articleMatch || null;
    }, [data, id]);

    if (loading || !article) {
        return (
            <>
                <HeroSection title="Loading..." bg="/images/home/home-hero-3.jpg" alt="Blog Banner" />
                <div className="wrapper py-15 lg:py-[6vw]">
                    <Skeleton className="h-20 w-full mb-5" />
                    <Skeleton className="h-64 w-full" />
                </div>
            </>
        );
    }

    return (
        <>
            <HeroSection 
                title={article.title || "Blog Post"} 
                bg={article.image || "/images/home/home-hero-3.jpg"} 
                alt="Blog Banner" 
            />
            <DetailSection article={article} allArticles={data?.articles || []} />
            <FaqSection faqs={data?.faqs || []} loading={loading} />
        </>
    )
}