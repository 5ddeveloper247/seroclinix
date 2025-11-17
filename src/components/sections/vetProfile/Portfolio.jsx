"use client";

import { featuredVets } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Portfolio() {
    return (
        <section className="py-15 lg:py-[6vw] relative">
            <div className="wrapper">
                <div className="relative">
                    {/* Swiper */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        modules={[Autoplay]}
                        speed={1500}
                        autoplay={{
                            delay: 2500, // 2.5 seconds between slides
                            disableOnInteraction: false, // keep autoplay running after user interaction
                            pauseOnMouseEnter: true, // pause when hovered
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="vet-slider"
                    >
                        {featuredVets.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div
                                    className="relative h-60 lg:h-[15vw] overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
