"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareerPage } from "@/store/thunk/careerThunk";

import HeroSection from "@/components/common/HeroSection";
import JobListings from "@/components/sections/career/JobListing";

export default function CareerClient() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(fetchCareerPage());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <HeroSection title="Careers" bg="/images/banners/career.png" alt="Career Image" />
            <JobListings />
        </>
    )
}