"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { Skeleton } from "@heroui/react";

export default function GalleryAbout() {
    const { data, loading } = useSelector((state) => state.about);
    const gallery = data?.gallery || [];

    const sortedGallery = [...gallery].sort(
        (a, b) => a.display_order - b.display_order
    );

    const showSkeleton = loading || sortedGallery.length === 0;

    return (
        <section className="relative w-full mx-auto pb-10">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={6}
                slidesPerView={3.5}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 4,
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 6,
                    },
                }}
                loop
                className="py-10"
            >
                {showSkeleton
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-[30vw] w-full">
                                <Skeleton className="h-full w-full rounded-3xl lg:rounded-[1vw]" />
                            </div>
                        </SwiperSlide>
                    ))
                    : sortedGallery.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative h-70 lg:h-[30vw] w-full">
                                <Image
                                    src={item.image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    sizes="(min-width:1024px) 33vw, 80vw"
                                    className="object-cover rounded-3xl lg:rounded-[1vw]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}
