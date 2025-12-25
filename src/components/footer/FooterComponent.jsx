"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { apiRequest } from "@/lib/axios";

export default function FooterComponent() {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = useCallback(async () => {
        if (!email.trim()) {
            toast.error("Please enter your email");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        try {
            setLoading(true);

            await apiRequest("post", "/api/v1/sero-clinix/newsletters", {
                email: email.trim(),
            });


            toast.success("Subscribed successfully!");
            setEmail("");
        } catch (error) {
            const apiMessage =
                error?.response?.data?.errors?.email?.[0] ||
                error?.response?.data?.message ||
                "Subscription failed. Please try again.";

            toast.error(apiMessage);
        } finally {
            setLoading(false);
        }
    }, [email]);

    return (
        <footer className="bg-[#00565F] pt-15 lg:pt-[7vw] pb-[3vw] relative overflow-hidden">
            {/* Top Wave */}
            <div className="hidden lg:block absolute top-0 left-0 w-full h-[3vw] z-10">
                <Image
                    src="/svg/wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover rotate-180"
                />
            </div>

            <div className="lg:hidden absolute top-0 left-0 w-full h-[8vw] z-10">
                <Image
                    src="/svg/mobile-wave.svg"
                    alt="Wave Image"
                    fill
                    priority
                    className="object-cover rotate-180"
                />
            </div>

            {/* Main Wrapper */}
            <div className="wrapper relative">
                {/* Header Section */}
                <Link href="/contact" className="flex items-start gap-[1vw]">
                    <h1 className="border-b border-[#ffffff3c] text-[40px] lg:text-[8vw] pb-[2vw] leading-none w-fit mb-0 text-white font-light uppercase">
                        Get In <strong className="font-semibold">Touch</strong>
                    </h1>
                    <ArrowUpRightIcon className="size-10 lg:size-[8.5vw] text-white" />
                </Link>

                <Image
                    src="/svg/footer-paw.svg"
                    alt="Paw Decoration"
                    width={400}
                    height={400}
                    className="absolute top-[5vw] right-[5vw] w-[20vw] object-contain"
                />
            </div>

            {/* Footer Grid */}
            <div className="border-t-2 border-b-2 border-[#ffffff42] mt-6 lg:mt-[6vw] mb-6 lg:mb-[3vw]">
                <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1 */}
                    <div className="pe-[3vw] py-10 lg:py-[3vw] flex flex-col items-center lg:items-start gap-4">
                        <Image
                            src="/svg/footer-logo.svg"
                            alt="Footer Logo"
                            width={180}
                            height={80}
                            className="w-45 lg:w-[13vw]"
                        />
                        <p className="text-white text-center lg:text-start">
                            Emergency care is available any time your pet needs urgent
                            attention for illness or injury
                        </p>

                        {/* Newsletter */}
                        <div className="border-2 border-white px-4 py-3 lg:py-[.8vw] lg:px-[0.5vw] rounded-full relative w-full max-w-sm">
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="w-full bg-transparent text-white placeholder:text-white border-none outline-none focus:ring-0"
                            />

                            <button
                                type="button"
                                onClick={handleSubscribe}
                                disabled={loading}
                                className="absolute border-[#00565F] border-3 lg:border-[.2vw] right-0 top-0 h-full w-20 lg:w-[7vw] flex items-center justify-center bg-white text-[#00565F] rounded-full font-medium disabled:opacity-60"
                            >
                                {loading ? "..." : "Subscribe"}
                            </button>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="py-8 px-5 lg:py-[3vw] lg:px-[5vw] border-b border-[#ffffff42] lg:border-b-0 lg:border-x lg:border-[#ffffff42]">
                        <h6 className="text-white font-normal text-center lg:text-start mb-3">
                            QUICK LINKS
                        </h6>
                        <ul className="space-y-4 lg:space-y-[1.5vw] mt-[2vw]">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Shop", href: "/shop" },
                                { name: "Career", href: "/career" },
                                { name: "Join Us", href: "/join" },
                                { name: "Blog", href: "/blog" },
                            ].map((link) => (
                                <li
                                    key={link.name}
                                    className="font-thin text-center lg:text-start text-white text-[16px] lg:text-[1.1vw]"
                                >
                                    <Link
                                        href={link.href}
                                        className="hover:text-gray-300 font-thin transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Services */}
                    <div className="py-8 px-5 lg:py-[3vw] lg:px-[5vw] border-b border-[#ffffff42] lg:border-b-0 lg:border-r lg:border-[#ffffff42]">
                        <h6 className="text-white font-normal text-center lg:text-start mb-3">
                            OUR SERVICES
                        </h6>
                        <ul className="space-y-4 lg:space-y-[1.5vw] mt-[2vw]">
                            {[
                                { name: "Veterinary Services", href: "/services/veterinary" },
                                { name: "Vet Near You", href: "/services/near-you" },
                                { name: "Certified Vet Techs", href: "/services/techs" },
                            ].map((service) => (
                                <li
                                    key={service.name}
                                    className="font-thin text-center lg:text-start text-white text-[16px] lg:text-[1.1vw]"
                                >
                                    <Link
                                        href={service.href}
                                        className="hover:text-gray-300 font-thin transition-colors duration-200"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div className="py-8 px-5 lg:py-[3vw] lg:px-[5vw]">
                        <h6 className="text-white font-normal text-center lg:text-start mb-3">
                            CONTACT
                        </h6>
                        <ul className="space-y-[1.5vw] mt-[2vw]">
                            <li className="font-thin text-center lg:text-start text-white text-[16px] lg:text-[1.1vw]">
                                <Link href="tel:8884567890" className="hover:text-gray-300 font-thin">
                                    (888) 456 7890
                                </Link>
                            </li>
                            <li className="font-thin text-center lg:text-start text-white text-[16px] lg:text-[1.1vw]">
                                <Link href="mailto:info@example.com" className="hover:text-gray-300 font-thin">
                                    info@example.com
                                </Link>
                            </li>
                        </ul>

                        <h6 className="text-white font-normal text-center lg:text-start mb-3 mt-14 lg:mt-[3vw]">
                            ADDRESS
                        </h6>
                        <ul className="space-y-[1.5vw] mt-[2vw]">
                            <li className="font-thin text-center lg:text-start text-white text-[16px] lg:text-[1.1vw]">
                                <Link
                                    href="https://goo.gl/maps/example"
                                    target="_blank"
                                    className="hover:text-gray-300 font-thin"
                                >
                                    410 Sandtown, California 94001, USA
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="wrapper flex flex-col md:flex-row gap-3 items-center justify-between">
                <span className="text-white font-extralight">
                    © 2025 Seroclinix — All Rights Reserved
                </span>

                <div className="flex items-center gap-2 lg:gap-[.5vw] text-white font-extralight">
                    <Link href="/career" className="hover:text-gray-300 text-gray-100 font-thin">
                        Careers
                    </Link>
                    <span>|</span>
                    <Link href="/legal" className="hover:text-gray-300 text-gray-100 font-thin">
                        Legal Disclaimers
                    </Link>
                    <span>|</span>
                    <Link href="/privacy" className="hover:text-gray-300 text-gray-100 font-thin">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
