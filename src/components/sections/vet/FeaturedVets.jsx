"use client";

import { featuredVets } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Button from "@/components/common/Button";

export default function FeaturedVets() {
    return (
        <section className="py-15 lg:py-[6vw] relative">
            <div className="wrapper">
                <div className="lg:w-2/3 mb-6">
                    <h2 className="font-pat text-primary mb-2 lg:mb-0 leading-none">
                        Featured Vets
                    </h2>
                    <h2 className="mb-2">Find the best talented experts.</h2>
                    <p className="mb-6">Our veterinary team is committed to providing safe, effective, and compassionate care for pets of all ages.</p>
                </div>

                <div className="relative">
                    {/* Swiper */}
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="vet-slider"
                    >
                        {featuredVets.map((card) => (
                            <SwiperSlide key={card.id} className="border border-[5px] border-[#0000000D] p-[.7vw] rounded-[1vw]">
                                <div
                                    className="relative h-70 lg:h-[25vw] rounded-[1vw] overflow-hidden group"
                                    style={{
                                        backgroundImage: `url(${card.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    {/* Overlay */}
                                    <div
                                        className="absolute inset-0"
                                        style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 58.07%, #000000 100%)" }}
                                    ></div>


                                    {/* Content */}
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-1">
                                            {card.name}
                                        </h3>
                                        <p className="text-sm lg:text-base text-gray-200 max-w-[80%] leading-snug">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons on Right */}
                    <div className="hidden absolute top-[-13%] right-[4%] lg:flex gap-2 z-10">
                        <button className="swiper-button-next bg-white border border-primary text-primary! hover:bg-primary hover:text-white! rounded-full p-3 shadow-lg transition-all">
                            <ChevronLeft className="size-[3vw]" />
                        </button>
                        <button className="swiper-button-prev bg-white border border-primary text-primary! hover:bg-primary hover:text-white! rounded-full p-3 shadow-lg transition-all">
                            <ChevronRight className="size-[3vw]" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between pt-10 pt-[5vw]">
                    <div>
                        <h2 className="mb-2">Most complete services portal.</h2>
                        <p className="mb-6">Signup and start find your job or talents.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-3 mt-5 lg:mt-0">
                        <Button
                            text="Book an appointment"
                            className="bg-transparent justify-center border border-primary! text-primary! w-full text-nowrap"
                        />
                        <Button
                            text="join the agency"
                            className="w-full justify-center text-nowrap"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
