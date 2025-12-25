"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Skeleton } from "@heroui/react";

export default function LatestPost() {
    const { data, loading } = useSelector((state) => state.blog);
    const featuredArticle = data?.featured_articles?.[0];

    const showSkeleton = loading || !featuredArticle;

    return (
        <section>
            <div className="wrapper py-15 lg:py-[6vw]">
                {/* STATIC HEADING */}
                <h2 className="mb-7! lg:!mb-[3vw]">Latest Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3vw] bg-[#F6F6F6] p-3 lg:p-[1.3vw] rounded-[1vw]">

                    {/* IMAGE */}
                    <div className="h-65 lg:h-[27vw] w-full relative">
                        {showSkeleton ? (
                            <Skeleton className="h-full w-full rounded-[1vw]" />
                        ) : (
                            <div>
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    fill
                                    priority
                                    className="rounded-[1vw] object-cover object-center"
                                />

                                {featuredArticle.category && (
                                    <span className="absolute bottom-5 left-5 lg:bottom-[1vw] lg:left-[1vw] bg-white z-10 px-4 py-2 lg:px-[1vw] lg:py-[.3vw] rounded-full">
                                        {featuredArticle.category}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* CONTENT */}
                    <div>
                        {showSkeleton ? (
                            <>
                                <Skeleton className="h-6 w-[80%] mb-3" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-[90%] mb-2" />
                                <Skeleton className="h-4 w-[70%] mb-5" />

                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-4 w-[40%]" />
                                    <Skeleton className="h-10 w-10 rounded-full" />
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-[22px] lg:text-[1.5vw] font-semibold leading-snug mb-3">
                                    {featuredArticle.title}
                                </h3>

                                <div
                                    className="text-gray-700 mb-5 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: featuredArticle.description,
                                    }}
                                />

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        {featuredArticle.date} · {featuredArticle.read_time}
                                    </span>

                                    <Link href={`/blog/${featuredArticle.id}`}>
                                        <Image
                                            src="/svg/arrow-circle.svg"
                                            alt="Read More"
                                            width={40}
                                            height={40}
                                            className="w-10 lg:w-[3vw]"
                                        />
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
