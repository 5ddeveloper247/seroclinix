"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";


export default function WhoWeAre() {

    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "Our Mission" },
        { id: "services", label: "Why We Started" },
        { id: "contact", label: "Community " },
    ];

    return (
        <>
            <section className="py-15 lg:py-[6vw] wrapper">
                <div className="text-start lg:text-center mb-10 lg:mb-[4vw] w-full lg:max-w-[45vw] mx-auto">
                    <h2 className="font-pat leading-none mb-10 lg:mb-0! text-primary">Who We Are</h2>
                    <h2 className="text-heading tracking-tighter mb-5! lg:mb-0">
                        Dedicated to delivering exceptional care & services.
                    </h2>
                    <p>
                        We pride ourselves on offering personalized attention tailored to meet the unique needs of each pet. Our state-of-the-art facilities are equipped with the latest technology to deliver.
                    </p>
                </div>

                <div className="w-full">
                    {/* Tabs Header */}
                    <div className="flex justify-center lg:justify-start gap-[2vw]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 lg:py-[1vw] lg:px-[1.3vw] text-[12px] lg:text-[1.1vw] font-medium transition-all relative rounded-full cursor-pointer
                                ${activeTab === tab.id
                                        ? "text-white bg-primary w-full"
                                        : "text-black hover:text-primary w-full border border-gray-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-10! lg:mt-[4vw]! text-[0.9vw] text-gray-700 leading-relaxed">
                        {activeTab === "about" && (
                            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                                <div>
                                    <h2 className="mb-8 lg:mb-[1.5vw]!">Better fit the specific offerings & values.</h2>
                                    <p>
                                        Welcome to a new era of efficiency and innovation. At Seroclinix, we redefine the way businesses operate in the digital age. Our cloud-based software-as-a-service (SaaS) solutions are designed to elevate your workflow, boost collaboration, and drive unparalleled results. Say goodbye to the limitations of traditional software and embrace the flexibility and scalability of Seroclinix. With user-friendly interfaces and cutting-edge features, we empower your teams to work smarter, not harder.
                                    </p>
                                </div>

                                <div>
                                    <div className="relative h-[70vw] w-[90vw] lg:h-[26vw] lg:w-[36vw] rounded-4xl lg:rounded-[2vw] overflow-hidden">
                                        <Image
                                            src="/images/about/about-two.jpg"
                                            fill
                                            className="object-cover"
                                            alt="Mission"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "services" && (
                            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                                <div>
                                    <h2 className="mb-8 lg:mb-[1.5vw]!">Better fit the specific offerings & values.</h2>
                                    <p>
                                        Welcome to a new era of efficiency and innovation. At Seroclinix, we redefine the way businesses operate in the digital age. Our cloud-based software-as-a-service (SaaS) solutions are designed to elevate your workflow, boost collaboration, and drive unparalleled results. Say goodbye to the limitations of traditional software and embrace the flexibility and scalability of Seroclinix. With user-friendly interfaces and cutting-edge features, we empower your teams to work smarter, not harder.
                                    </p>
                                </div>

                                <div>
                                    <div className="relative h-[70vw] w-[90vw] lg:h-[26vw] lg:w-[36vw] rounded-4xl lg:rounded-[2vw] overflow-hidden">
                                        <Image
                                            src="/images/about/about-two.jpg"
                                            fill
                                            className="object-cover"
                                            alt="Mission"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "contact" && (
                            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                                <div>
                                    <h2 className="mb-8 lg:mb-[1.5vw]!">Better fit the specific offerings & values.</h2>
                                    <p>
                                        Welcome to a new era of efficiency and innovation. At Seroclinix, we redefine the way businesses operate in the digital age. Our cloud-based software-as-a-service (SaaS) solutions are designed to elevate your workflow, boost collaboration, and drive unparalleled results. Say goodbye to the limitations of traditional software and embrace the flexibility and scalability of Seroclinix. With user-friendly interfaces and cutting-edge features, we empower your teams to work smarter, not harder.
                                    </p>
                                </div>

                                <div>
                                    <div className="relative h-[70vw] w-[90vw] lg:h-[26vw] lg:w-[36vw] rounded-4xl lg:rounded-[2vw] overflow-hidden">
                                        <Image
                                            src="/images/about/about-two.jpg"
                                            fill
                                            className="object-cover"
                                            alt="Mission"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            <section className="h-[80vh] lg:h-[90vh] w-full relative bg-center bg-cover" style={{ backgroundImage: "url('/images/about/about-three.jpg')" }}>
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
    )
}