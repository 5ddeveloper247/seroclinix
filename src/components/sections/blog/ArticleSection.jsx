"use client";

import Image from "next/image";
import Link from "next/link";
import { articleSection } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ArticleSection() {
    return (
        <section>
            <div className="wrapper pb-15 lg:pb-[6vw]">
                <h2 className="mb-7! lg:mb-[2vw]">Article & News</h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}">${index + 1}</span>`;
                        },
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="article-swiper pb-15! lg:pb-[5vw]!"
                >
                    {articleSection.map((article) => (
                        <SwiperSlide key={article.id}>
                            <div>
                                <div
                                    className="relative h-50 lg:h-[20vw] w-full 
                                    after:content-[''] after:absolute after:inset-0 
                                    after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#888888_100%)] 
                                    after:mix-blend-multiply after:rounded-3xl lg:after:rounded-[1vw]"
                                >
                                    <Image
                                        src={article.src}
                                        fill
                                        className="rounded-3xl lg:rounded-[1vw] object-cover"
                                        alt="Blog Image"
                                    />

                                    <span className="absolute bottom-5 left-5 lg:bottom-[1vw] lg:left-[1vw] bg-white z-10 px-4 py-2 lg:px-[1vw] lg:py-[.3vw] rounded-full">{article.category}</span>
                                </div>


                                <div className="flex items-center justify-between mt-4 lg:mt-[1vw]">
                                    <span>{article.date}</span>
                                    <span>{article.time}</span>
                                </div>

                                <hr className="opacity-20 my-5 lg:my-[1vw]" />

                                <div className="flex flex-col gap-5 lg:gap-[1vw]">
                                    <h4>{article.title}</h4>
                                    <p>{article.desc}</p>
                                    <Link href="" className="text-primary">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
