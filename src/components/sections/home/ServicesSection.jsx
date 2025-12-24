"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import ServiceHeading from "@/components/common/ServiceHeading";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ServicesSection() {
    const { data, loading } = useSelector((state) => state.home);

    const services = data?.featured_services || [];

    if (loading || services.length === 0) return null;

    return (
        <section className="bg-second-bg">
            <div className="wrapper py-15 lg:py-[7vw]">
                <div className="text-center">
                    <h2 className="font-pat text-[40px] text-primary mb-0!">
                        Our Services
                    </h2>
                    <ServiceHeading />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[3vw] mt-10">
                    {/* LEFT FEATURE CARD (static) */}
                    <div className="d_card relative overflow-hidden rounded-4xl lg:rounded-[2vw] flex items-center gap-[.7vw] bg-primary p-10 lg:p-0 min-h-75">
                        <Image
                            src="/images/home/service-one.png"
                            className="absolute bottom-[-6%] left-[-15%] lg:bottom-0 lg:left-[-3.5vw] w-45 lg:w-[12vw]"
                            width={100}
                            height={100}
                            alt="Dog Image"
                        />
                        <h3 className="text-white py-10 px-6 lg:px-[7vw]! lg:py-[4.5vw]! leading-none text-center lg:text-start">
                            From routine check-ups to advanced treatments
                        </h3>
                    </div>

                    {/* API SERVICES */}
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col justify-center bg-white rounded-4xl lg:rounded-[2vw] p-5 lg:p-[2vw] gap-5 lg:gap-[1vw] min-h-75"
                        >
                            <div className="relative h-25 w-25 lg:h-[6vw] lg:w-[6vw]">
                                <Image
                                    src={service.image}
                                    className="rounded-[50px] object-cover"
                                    fill
                                    alt={service.heading}
                                />
                            </div>

                            <h4>{service.heading}</h4>
                            <p className="mb-0!">{service.description}</p>

                            <Link
                                href={`/services/${service.id}`}
                                className="flex items-center gap-[.8vw]"
                            >
                                Read more
                                <ArrowRightIcon className="size-[1.3vw] text-primary" />
                            </Link>
                        </div>
                    ))}

                    {/* RIGHT LARGE IMAGE (static) */}
                    <div>
                        <div className="relative h-full w-full min-h-75">
                            <Image
                                src="/images/home/service-six.png"
                                className="rounded-[50px] object-cover"
                                fill
                                alt="Dog Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
