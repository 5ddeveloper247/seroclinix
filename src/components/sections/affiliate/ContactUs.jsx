"use client";

import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { featuresList } from "@/data/data.js";

export default function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="py-[2vw]">
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
                <div className="flex flex-col justify-center">
                    <h2 className="font-pat sub-title text-[40px] lg:text-[2.4vw] leading-none text-primary mb-3!">
                        Contact Us
                    </h2>
                    <h2 className="text-heading mb-5!">
                        Shape marketing while boosting your income
                    </h2>

                    <p className="opacity-50">
                        Join the Seroclinix Affiliate Program and start earning commissions for every first purchase and trial made by your referrals
                    </p>

                    <ul className="my-5 lg:mt-[1vw] grid grid-cols-2 gap-y-5 lg:gap-y-[1vw]">
                        {featuresList.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex gap-2 lg:gap-[.5vw] text-[16px] lg:text-[1vw] items-center font-[500]"
                            >
                                <Image
                                    src="/svg/check.svg"
                                    width={15}
                                    height={10}
                                    alt="Check Mark"
                                />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-[2vw] mt-5 lg:mt-[3vw]">
                        <div className="w-full flex items-center gap-3 lg:gap-[1vw]">
                            <div className="h-14 w-14 lg:h-[5vw] lg:w-[5vw] relative">
                                <Image src="/svg/phone.svg" alt="Phone icon" fill />
                            </div>

                            <div>
                                <span className="opacity-50">Emergency call</span>
                                <h4 className="mt-1">1 500-905 01 99</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[linear-gradient(171.97deg,rgba(236,234,236,0.396)_0%,#160C1E_100%)] text-white bg-[#000000B2] p-7 lg:p-[2vw] lg:rounded-[1vw]">
                    <h6 className="mb-5!">Start your journey with filling this form</h6>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {/* First Name */}
                        <div>
                            <label className="block mb-2 font-medium">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            />
                        </div>

                        {/* Business/Company Name */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Business / Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your company name"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                required
                                placeholder="+1 (555) 555-5555"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            />
                        </div>

                        {/* Website / Social Media */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Website / Social Media <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Enter your website or social media link"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            />
                        </div>

                        {/* Preferred Modal */}
                        <div>
                            <label className="block mb-2 font-medium">
                                Preferred Model <span className="text-red-500">*</span>
                            </label>
                            <select
                                required
                                className="w-full bg-white text-black rounded-full border border-white focus:border focus:border-primary focus:outline-none"
                            >
                                <option value="">Select preferred model</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="franchise">Franchise</option>
                                <option value="sponsorship">Sponsorship</option>
                                <option value="affiliate">Affiliate</option>
                            </select>
                        </div>

                        {/* Why Join */}
                        <div className="md:col-span-2">
                            <label className="block mb-2 font-medium">
                                Why Join? <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows="1"
                                required
                                placeholder="Tell us why you'd like to join"
                                className="w-full bg-white rounded-full border border-white focus:border focus:border-primary focus:outline-none resize-none"
                            ></textarea>
                        </div>
                    </form>

                    {/* Submit Button */}
                    <div className="mt-5">
                        <Button
                            text="Submit"
                            className="w-full justify-center"
                        />
                    </div>
                </div>

            </div>


            {/* <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 my-15! lg:mt-[5vw]!">
                {aboutCards.map((card, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center lg:items-start gap-4 lg:gap-[2vw] relative pt-9 lg:px-[3vw]! dotted-border"
                    >
                        <div className="h-10 w-10 lg:h-[4vw] lg:w-[4vw] relative">
                            <Image src={card.icon} fill alt={card.title} />
                        </div>

                        <div className="text-center lg:text-start">
                            <h6 className="mb-3">{card.title}</h6>
                            <p className="mb-0!">{card.description}</p>
                        </div>

                        <Link href={card.link} className="flex items-center gap-1 lg:gap-[.8vw]">
                            Read more
                            <ArrowRightIcon className="size-6 lg:size-[1.3vw] text-primary" />
                        </Link>
                    </div>
                ))}
            </div> */}
        </section>
    );
}
