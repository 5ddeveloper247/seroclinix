"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { Skeleton } from "@heroui/react";

export default function TestimonialSection({ testimonials = [], loading = false }) {
    // Show skeleton immediately and until testimonials load
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        if (!loading && testimonials.length > 0) {
            setShowSkeleton(false);
        }
    }, [loading, testimonials]);

    const slides = showSkeleton ? Array(3).fill(0) : testimonials;

    return (
        <section className="py-15 lg:py-[6vw]">
            <div className="text-center mb-10 lg:mb-[4vw]">
                <h2 className="font-pat leading-none mb-10 lg:mb-0! text-primary">
                    Testimonial
                </h2>

                <h2 className="text-heading lg:flex lg:items-center lg:flex-wrap gap-x-[1.4vw] justify-center text-center lg:max-w-[70vw] mx-auto lg:leading-[4.3vw]!">
                    Real stories from clients who
                    <img src="/svg/cat.svg" alt="" className="hidden lg:block" />
                    trust our veterinary clinic with their pets
                </h2>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2.5}
                loop={slides.length > 2.5}
                centeredSlides
                speed={2000}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    0: { slidesPerView: 1.1, spaceBetween: 10, centeredSlides: true },
                    640: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
                    1024: { slidesPerView: 2, spaceBetween: 25, centeredSlides: false },
                    1280: { slidesPerView: 2.5, spaceBetween: 30, centeredSlides: true },
                }}
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={item?.id || idx}>
                        <div className="p-10 lg:p-[2vw] flex flex-col items-center gap-5 lg:gap-[2vw] bg-second-bg rounded-[2vw]">
                            {showSkeleton ? (
                                <>
                                    {/* Rating skeleton */}
                                    <div className="flex items-center gap-[.3vw]">
                                        {Array(4)
                                            .fill(0)
                                            .map((_, i) => (
                                                <Skeleton key={i} className="h-4 w-4 rounded-full" />
                                            ))}
                                    </div>

                                    {/* Review skeleton */}
                                    <Skeleton className="h-14 w-5/6 lg:w-[80%] mx-auto" />

                                    {/* User skeleton */}
                                    <div className="flex flex-col items-center gap-2 lg:gap-[.5vw]">
                                        <Skeleton className="h-14 w-14 lg:h-[4vw] lg:w-[4vw] rounded-full" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* RATING */}
                                    <div className="flex items-center gap-[.3vw]">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <Image
                                                key={i}
                                                src="/svg/star.svg"
                                                alt="Star"
                                                width={18}
                                                height={18}
                                            />
                                        ))}
                                    </div>

                                    {/* REVIEW */}
                                    <i className="text-[14px] lg:text-[1vw] lg:leading-[2vw]! text-center">
                                        {item.review}
                                    </i>

                                    {/* USER */}
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-14 h-14 lg:w-[4vw] lg:h-[4vw]">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        <h6 className="mt-[1vw]">{item.name}</h6>
                                    </div>
                                </>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
