"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function WhoWeAre() {
    const [activeTab, setActiveTab] = useState("mission");

    // Redux state (about page)
    const { data } = useSelector((state) => state.about);

    const whoWeAre = data?.who_we_are;
    const activeContent = whoWeAre?.[activeTab];

    const tabs = [
        { id: "mission", label: "Our Mission" },
        { id: "started", label: "Why We Started" },
        { id: "community", label: "Community" },
    ];

    return (
        <>
            <section className="py-15 lg:py-[6vw] wrapper">
                {/* Section Heading (STATIC) */}
                <div className="text-start lg:text-center mb-10 lg:mb-[4vw] w-full lg:max-w-[45vw] mx-auto">
                    <h2 className="font-pat leading-none mb-10 lg:mb-0! text-primary">
                        Who We Are
                    </h2>

                    <h2 className="text-heading tracking-tighter mb-5! lg:mb-0">
                        Dedicated to delivering exceptional care & services.
                    </h2>

                    <p>
                        We pride ourselves on offering personalized attention tailored to meet the unique needs of each pet.
                        Our state-of-the-art facilities are equipped with the latest technology to deliver.
                    </p>
                </div>

                <div className="w-full">
                    {/* Tabs Header */}
                    <div className="flex justify-center lg:justify-start gap-[2vw]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 lg:py-[1vw] lg:px-[1.3vw] text-[12px] lg:text-[1.1vw] font-medium transition-all rounded-full w-full
                                    ${
                                        activeTab === tab.id
                                            ? "text-white bg-primary"
                                            : "text-black border border-gray-300 hover:text-primary"
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content (DYNAMIC PART ONLY) */}
                    {activeContent && (
                        <div className="mt-10! lg:mt-[4vw]! text-gray-700 leading-relaxed">
                            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                                <div>
                                    {/* API Heading */}
                                    <h2 className="mb-8 lg:mb-[1.5vw]!">
                                        {activeContent.heading?.value}
                                    </h2>

                                    {/* STATIC DESCRIPTION (API does not provide this) */}
                                    <p>
                                        Welcome to a new era of efficiency and innovation. At Seroclinix, we redefine the way
                                        businesses operate in the digital age. Our cloud-based software-as-a-service (SaaS)
                                        solutions are designed to elevate your workflow, boost collaboration, and drive
                                        unparalleled results.
                                    </p>
                                </div>

                                {/* API Image */}
                                <div>
                                    <div className="relative h-[70vw] w-[90vw] lg:h-[26vw] lg:w-[36vw] rounded-4xl lg:rounded-[2vw] overflow-hidden">
                                        <Image
                                            src={activeContent.image?.value}
                                            fill
                                            className="object-cover"
                                            alt={tabs.find(t => t.id === activeTab)?.label}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom Banner (STATIC) */}
            <section
                className="h-[80vh] lg:h-[90vh] w-full relative bg-center bg-cover"
                style={{ backgroundImage: "url('/images/about/about-three.jpg')" }}
            >
                <div className="h-[3vw] w-full hidden lg:block absolute top-0 left-0 z-10">
                    <Image
                        src="/svg/wave.svg"
                        alt="Wave Image"
                        fill
                        priority
                        className="object-cover rotate-180"
                    />
                </div>

                <div className="h-[8vw] lg:hidden w-full absolute top-0 left-0 z-10">
                    <Image
                        src="/svg/mobile-wave.svg"
                        alt="Wave Image"
                        fill
                        priority
                        className="object-cover rotate-180"
                    />
                </div>

                <div className="h-[3vw] hidden lg:block w-full absolute bottom-0 left-0 z-10">
                    <Image
                        src="/svg/wave.svg"
                        alt="Wave Image"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="h-[8vw] lg:hidden w-full absolute bottom-0 left-0 z-10">
                    <Image
                        src="/svg/mobile-wave.svg"
                        alt="Wave Image"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </section>
        </>
    );
}
