"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { Skeleton } from "@heroui/react";

export default function OurMembers() {
    const { data } = useSelector((state) => state.about);
    const members = data?.members;

    const showSkeleton = !members; // immediate skeleton, no delay
    const skeletonItems = Array(3).fill(0);

    return (
        <section>
            <div className="wrapper py-15 lg:py-[6vw]">
                {/* ===== STATIC HEADER (NO SKELETON) ===== */}
                <div className="text-center mb-10 lg:mb-[4vw] lg:max-w-[50vw] mx-auto">
                    <h2 className="font-pat leading-none mb-10 text-primary">
                        Our Members
                    </h2>
                    <h2 className="text-heading">
                        Dedicated to delivering exceptional care & services.
                    </h2>
                    <p>
                        We pride ourselves on offering personalized attention tailored to meet the unique needs of each pet.
                        Our state-of-the-art facilities are equipped with the latest technology to deliver.
                    </p>
                </div>

                {/* ===== DYNAMIC GRID ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(showSkeleton ? skeletonItems : members).map((member, index) => (
                        <div
                            key={member?.id || index}
                            className="text-center bg-[#F6F6F6] p-4 lg:p-[1.5vw] rounded-3xl lg:rounded-[2vw]"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full aspect-[1.3/1] mb-4">
                                {showSkeleton ? (
                                    <Skeleton className="w-full h-full rounded-3xl lg:rounded-[2vw]" />
                                ) : (
                                    <Image
                                        src={member.image || "/images/default-member.jpg"}
                                        alt={member.name}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover rounded-3xl lg:rounded-[2vw]"
                                    />
                                )}
                            </div>

                            {/* NAME */}
                            {showSkeleton ? (
                                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                            ) : (
                                <h4 className="mb-0">{member.name}</h4>
                            )}

                            {/* ROLE */}
                            {showSkeleton ? (
                                <Skeleton className="h-4 w-1/2 mx-auto" />
                            ) : (
                                <span className="text-gray-500">{member.role}</span>
                            )}

                            {/* SOCIAL ICONS */}
                            <div className="flex items-center justify-center gap-4 lg:gap-[1vw] mt-5">
                                {showSkeleton
                                    ? Array(4)
                                          .fill(0)
                                          .map((_, i) => (
                                              <Skeleton
                                                  key={i}
                                                  className="h-6 w-6 lg:w-[1.2vw] rounded-full"
                                              />
                                          ))
                                    : (
                                        <>
                                            <img src="/svg/facebook.svg" className="w-6 lg:w-[1.2vw]" alt="Facebook" />
                                            <img src="/svg/insta.svg" className="w-6 lg:w-[1.2vw]" alt="Instagram" />
                                            <img src="/svg/tiktok.svg" className="w-6 lg:w-[1.2vw]" alt="TikTok" />
                                            <img src="/svg/youtube.svg" className="w-6 lg:w-[1.2vw]" alt="YouTube" />
                                        </>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
