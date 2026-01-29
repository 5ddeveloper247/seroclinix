'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FaqSection from "@/components/common/FaqSection";
import FormSection from "@/components/sections/contact/FormSection";
import HeroSection from "@/components/common/HeroSection";

export default function Contact() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.home);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!mounted) return;
      const module = await import("@/store/thunk/homeThunk");
      const { fetchHomePage } = module;
      dispatch(fetchHomePage());
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  return (
    <>
      <HeroSection
        title="Contact"
        bg="/images/banners/contact.jpg"
        alt="Contact Banner"
      />
      <FormSection />
      <FaqSection faqs={data?.faqs || []} loading={loading} />
    </>
  );
}
