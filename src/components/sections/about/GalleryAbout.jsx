"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";

export default function GalleryAbout() {
    const { data } = useSelector((state) => state.about);
    const gallery = data?.gallery || [];

    // Make a copy before sorting to avoid mutating read-only state
    const sortedGallery = [...gallery].sort((a, b) => a.display_order - b.display_order);

    return (
        <section className="relative w-full max-w-6xl mx-auto pb-10">
            <Swiper
                modules={[Autoplay]}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={6}
                slidesPerView={3.5}
                loop={true}
                className="py-10"
            >
                {sortedGallery.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative h-[30vw] w-full lg:w-full mx-auto">
                            <Image
                                src={item.image}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover rounded-3xl lg:rounded-[1vw]"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
