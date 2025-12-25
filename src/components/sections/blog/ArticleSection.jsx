"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Skeleton } from "@heroui/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ArticleSection() {
    const { data, loading } = useSelector((state) => state.blog);
    const articles = data?.articles || [];

    const showSkeleton = loading || !articles.length;
    const skeletonSlides = Array.from({ length: 3 });

    return (
        <section>
            <div className="wrapper pb-15 lg:pb-[6vw]">
                {/* STATIC HEADING */}
                <h2 className="mb-7! lg:mb-[2vw]">Article & News</h2>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) =>
                            `<span class="${className}">${index + 1}</span>`,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="article-swiper pb-15! lg:pb-[5vw]!"
                >
                    {showSkeleton
                        ? skeletonSlides.map((_, i) => (
                            <SwiperSlide key={`skeleton-${i}`}>
                                <div>
                                    {/* Image Skeleton */}
                                    <Skeleton className="h-50 lg:h-[20vw] w-full rounded-3xl lg:rounded-[1vw]" />

                                    {/* Meta */}
                                    <div className="flex items-center justify-between mt-4 lg:mt-[1vw]">
                                        <Skeleton className="h-4 w-[30%]" />
                                        <Skeleton className="h-4 w-[20%]" />
                                    </div>

                                    <hr className="opacity-20 my-5 lg:my-[1vw]" />

                                    {/* Content */}
                                    <div className="flex flex-col gap-4">
                                        <Skeleton className="h-5 w-[90%]" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-[85%]" />
                                        <Skeleton className="h-4 w-[60%]" />
                                        <Skeleton className="h-4 w-[30%]" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        : articles.map((article) => (
                            <SwiperSlide key={article.id}>
                                <div>
                                    {/* Image */}
                                    <div
                                        className="relative h-50 lg:h-[20vw] w-full 
                                          after:content-[''] after:absolute after:inset-0 
                                          after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#888888_100%)] 
                                          after:mix-blend-multiply after:rounded-3xl lg:after:rounded-[1vw]"
                                    >
                                        <Image
                                            src={article.image}
                                            fill
                                            className="rounded-3xl lg:rounded-[1vw] object-cover"
                                            alt={article.title}
                                        />

                                        {article.category && (
                                            <span className="absolute bottom-5 left-5 lg:bottom-[1vw] lg:left-[1vw] bg-white z-10 px-4 py-2 lg:px-[1vw] lg:py-[.3vw] rounded-full">
                                                {article.category}
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between mt-4 lg:mt-[1vw] text-sm text-gray-600">
                                        <span>{article.date}</span>
                                        <span>{article.read_time}</span>
                                    </div>

                                    <hr className="opacity-20 my-5 lg:my-[1vw]" />

                                    {/* Content */}
                                    <div className="flex flex-col gap-5 lg:gap-[1vw]">
                                        <h4>{article.title}</h4>

                                        <div
                                            className="text-gray-700 line-clamp-3"
                                            dangerouslySetInnerHTML={{
                                                __html: article.description,
                                            }}
                                        />

                                        <Link
                                            href={`/blog/${article.id}`}
                                            className="text-primary font-medium"
                                        >
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
