"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function LatestPost() {
    const { data } = useSelector((state) => state.blog);

    const featuredArticle = data?.featured_articles?.[0];

    if (!featuredArticle) return null;

    return (
        <section>
            <div className="wrapper py-15 lg:py-[6vw]">
                <h2 className="mb-7! lg:!mb-[3vw]">Latest Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3vw] bg-[#F6F6F6] p-3 lg:p-[1.3vw] rounded-[1vw]">
                    
                    {/* Image Section */}
                    <div className="h-65 lg:h-[27vw] w-full relative">
                        <Image
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            fill
                            priority
                            className="rounded-[1vw] object-cover object-center"
                        />
                    </div>

                    {/* Content Section */}
                    <div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
