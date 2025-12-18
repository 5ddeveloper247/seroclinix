"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { homeHero } from "@/data/data.js";
import { useSelector } from "react-redux";



// =================HOME-HERO-SECTION===============//
export default function HeroSection() {
    const heroSlides = useSelector(
    (state) => state.home.data?.hero_section?.slides
  );

  // 🔹 Guard
  if (!heroSlides || heroSlides.length === 0) {
    return null;
  }

    const swiperRef = useRef(null);

    // const slides = homeHero || [];
    // const slides = hero.slides;

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiper = swiperRef.current.swiper;

        // Animate on first load
        animateText(swiper.slides[swiper.activeIndex]);

        // Animate on each slide change
        swiper.on("slideChangeTransitionStart", () => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            animateText(activeSlide);
        });

        // Cleanup
        return () => {
            swiper.off("slideChangeTransitionStart");
        };
    }, []);

    // GSAP animation function
    const animateText = (slideEl) => {
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
                stagger: 0.1,
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
                            alt={`Slide ${slide.id}`}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="relative z-10 wrapper text-center lg:text-start h-full w-full flex flex-col justify-center">
                            <div className="overflow-hidden">
                                <h2 className="font-pat sub-title opacity-0 text-[40px] lg:text-[5vw] leading-none mb-0! text-hand-font">
                                    {slide.subtitle}
                                </h2>
                            </div>

                            <h1 className="heading text-white leading-none font-medium w-full lg:max-w-[50vw]">
                                {slide.text.split(" ").map((word, i) => (
                                    <span
                                        key={i}
                                        className="inline-block overflow-hidden leading-none mr-[2vw]"
                                    >
                                        <span className="inline-block opacity-0">
                                            {word}
                                        </span>
                                    </span>
                                ))}
                            </h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="h-24 w-24 lg:h-[8vw] lg:w-[8vw] rounded-full absolute right-3 bottom-10 lg:right-[3vw] lg:bottom-[3vw] z-80">
                <Image 
                    src="/svg/home-badge.svg"
                    fill
                    priority
                    alt="Badge"
                />
            </div>

            <div className="h-[3vw] w-full absolute bottom-0 left-0 z-10 hidden lg:block">
                <Image
                    src="/svg/wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            <div className="h-[10vw] w-full absolute bottom-0 left-0 z-10 lg:hidden">
                <Image
                    src="/svg/mobile-wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
}
