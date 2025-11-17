"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProducts } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";

export default function FeaturedProducts() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    // Update navigation refs after swiper mounts
    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="py-16 lg:py-[6vw] relative">
            <div className="wrapper">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div className="lg:w-1/2">
                        <h2 className="font-pat text-primary mb-4! lg:mb-0! leading-none">
                            Popular Services
                        </h2>
                        <h2>Find our most popular services</h2>
                        <p className="lg:leading-none lg:mb-0! mt-5">Our veterinary team is committed to providing safe effective and compassionate care for pets of all ages</p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            ref={prevRef}
                            className="border border-primary text-primary rounded-full p-2 lg:p-[.5vw] hover:bg-primary hover:text-white transition"
                        >
                            <ChevronLeft className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />
                        </button>
                        <button
                            ref={nextRef}
                            className="border border-primary text-primary rounded-full p-2 lg:p-[.5vw] hover:bg-primary hover:text-white transition"
                        >
                            <ChevronRight className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />
                        </button>
                    </div>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    loop
                    speed={1500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {featuredProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="bg-[#F6F4F0] relative rounded-2xl lg:rounded-[1vw] h-50 lg:h-[20vw]">
                                <Image
                                    src={product.image}
                                    fill
                                    className=" object-contain"
                                    alt="Product Image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mt-10">
                    <div>
                        <h2>Looking for something specific?</h2>
                        <p className="mt-4">Contact us for product requests.</p>
                    </div>
                    <Link href="/contact">
                        <Button
                            text="Contact Us"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}