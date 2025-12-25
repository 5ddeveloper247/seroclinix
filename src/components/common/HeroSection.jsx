"use client";

import Image from "next/image";
import { Skeleton } from "@heroui/react";

export default function HeroSection({
    title,
    bg,
    alt = "Hero Banner",
    children,
    loading = false, // add loading prop
}) {
    // Fallback placeholder image when loading
    const placeholder = "/images/home/home-hero-2.jpg"; // you can add your placeholder

    return (
        <section className="hero-section relative h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0">
                {loading ? (
                    // Show skeleton or placeholder
                    <Skeleton className="h-full w-full" />
                ) : (
                    <Image
                        src={bg || placeholder}
                        alt={alt}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                )}
            </div>

            <div className="relative z-30 wrapper h-full w-full flex flex-col justify-center items-center text-center px-[4vw]">
                {title && (
                    <h1 className={`text-white font-medium leading-none text-[70px] lg:text-[7vw]`}>
                        {loading ? <Skeleton className="h-14 w-80 lg:w-[40vw]" /> : title}
                    </h1>
                )}

                {children}
            </div>

            {/* Wave background */}
            <div className="h-[3vw] w-full absolute bottom-0 left-0 z-10 hidden lg:block">
                <Image
                    src="/svg/wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            <div className="h-[10vw] w-full absolute bottom-0 left-0 z-10 lg:hidden">
                <Image
                    src="/svg/mobile-wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
        </section>
    );
}
