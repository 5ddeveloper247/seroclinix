"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


export default function TestimonialSection() {
    return (
        <>
            <section className="py-15 lg:py-[6vw]">
                <div className="text-center mb-10 lg:mb-[4vw]">
                    <h2 className="font-pat leading-none mb-10 lg:mb-0! text-primary">Testimonial</h2>
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
                    loop={true}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    speed={2000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {         
                            slidesPerView: 1.1,
                            spaceBetween: 10,
                            centeredSlides: true,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                            centeredSlides: false,
                        },
                        1280: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                            centeredSlides: true,
                        },
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-10 lg:p-[2vw] flex flex-col items-center gap-5 lg:gap-[2vw] bg-second-bg rounded-[2vw]">
                                <div className="flex items-center justify-center lg: gap-1 gap-[.3vw]">
                                    <img src="/svg/star.svg" alt="" />
                                    <img src="/svg/star.svg" alt="" />
                                    <img src="/svg/star.svg" alt="" />
                                    <img src="/svg/star.svg" alt="" />
                                    <img src="/svg/star.svg" alt="" />
                                </div>

                                <i className="text-[14px] lg:text-[1vw] lg:leading-[2vw]! text-center">
                                    Service was exceptional, and it's clear that you have a genuine passion for what you do.
                                    The attention to detail and willingness to personalize the experience made it truly memorable.
                                </i>

                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                                        className="w-14 h-14 lg:w-[4vw] lg:h-[4vw] object-cover rounded-full"
                                        alt=""
                                    />
                                    <h6 className="mt-[1vw]">Patric Stone</h6>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}