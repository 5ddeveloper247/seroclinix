"use client";

import { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
    const swiperRef = useRef(null);

    const { data, loading } = useSelector((state) => state.home);

    /**
     * Convert hero object → array
     */
    const slides = useMemo(() => {
        if (!data?.hero) return [];

        return Object.values(data.hero).map((item, index) => ({
            id: index + 1,
            subtitle: item.title?.value || "",
            text: item.heading?.value || "",
            bg: item.image?.value || "/images/hero-placeholder.jpg",
        }));
    }, [data]);


    const hasAnimatedOnce = useRef(false);

    useEffect(() => {
        if (!swiperRef.current || slides.length === 0) return;

        const swiper = swiperRef.current.swiper;

        // Animate ONLY once on initial load
        if (!hasAnimatedOnce.current) {
            animateText(swiper.slides[swiper.activeIndex]);
            hasAnimatedOnce.current = true;
        }

        const handleSlideChange = () => {
            animateText(swiper.slides[swiper.activeIndex]);
        };

        swiper.on("slideChangeTransitionStart", handleSlideChange);

        return () => {
            swiper.off("slideChangeTransitionStart", handleSlideChange);
        };
    }, [slides]);


    const animateText = (slideEl) => {
        if (!slideEl) return;

        const words = slideEl.querySelectorAll(".heading span span");
        const subTitle = slideEl.querySelectorAll(".sub-title");

        gsap.fromTo(
            subTitle,
            { yPercent: -100, opacity: 0 },
            {
                yPercent: 0,
                delay: 0.5,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
            }
        );

        gsap.fromTo(
            words,
            { yPercent: 100, opacity: 0 },
            {
                yPercent: 0,
                delay: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power4.out",
                stagger: 0.1,
            }
        );
    };

    if (loading) return null;

    return (
        <div className="h-[80vh] lg:h-[90vh] w-full relative overflow-hidden">
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop
                effect="fade"
                speed={1000}
                className="h-full w-full home-slider"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="hero-section relative">
                        <Image
                            src={slide.bg}
                            alt="Hero Slide"
                            fill
                            priority
                            className="object-cover"
                        />

                        <div className="relative z-10 wrapper text-center lg:text-start h-full w-full flex flex-col justify-center">
                            <div className="overflow-hidden">
                                <h2 className="font-pat sub-title opacity-0 text-[40px] lg:text-[5vw] leading-none text-hand-font">
                                    {slide.subtitle}
                                </h2>
                            </div>

                            <h1 className="heading text-white leading-none font-medium w-full lg:max-w-[50vw]">
                                {slide.text?.split(" ").map((word, i) => (
                                    <span key={i} className="inline-block overflow-hidden mr-[2vw]">
                                        <span className="inline-block opacity-0">{word}</span>
                                    </span>
                                ))}
                            </h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="h-24 w-24 lg:h-[8vw] lg:w-[8vw] rounded-full absolute right-3 bottom-10 lg:right-[3vw] lg:bottom-[3vw] z-80">
                <Image src="/svg/home-badge.svg" fill priority alt="Badge" />
            </div>

            <div className="h-[3vw] w-full absolute bottom-0 left-0 z-10 hidden lg:block">
                <Image src="/svg/wave.svg" alt="Wave Image" fill priority className="object-cover" />
            </div>

            <div className="h-[10vw] w-full absolute bottom-0 left-0 z-10 lg:hidden">
                <Image src="/svg/mobile-wave.svg" alt="Wave Image" fill priority className="object-cover" />
            </div>
        </div>
    );
}
