"use client";

import Image from "next/image";
import Button from "@/components/common/Button";
import Portfolio from "./Portfolio";

export default function AboutVet() {
    return (
        <section>
            <div className="wrapper pt-10 lg:pt-[5vw] flex flex-col lg:flex-row justify-between gap-15 lg:gap-[3vw]">
                {/* LEFT SIDEBAR */}
                <div className="lg:w-[25%]">
                    <h6>Meet Malissa T.</h6>

                    <div className="relative h-50 lg:h-[13vw] w-full mt-4">
                        <Image
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60"
                            alt="Profile of Malissa T."
                            fill
                            priority
                            className="object-cover rounded-2xl lg:rounded-[1vw]"
                        />
                    </div>

                    {/* DETAILS CARD */}
                    <div className="bg-[#F6F6F6] p-5 lg:p-[2vw] rounded-2xl lg:rounded-[1vw] mt-10">
                        <div className="flex flex-col items-center gap-3 lg:gap-[1vw]">
                            <div className="relative h-20 w-20 lg:h-[7vw] lg:w-[7vw]">
                                <Image
                                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=60"
                                    alt="Profile avatar"
                                    fill
                                    priority
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h6>Meet Malissa T.</h6>
                            <Button text="Book Appointment" className="w-full justify-center" />
                        </div>

                        {/* DETAILS LIST */}
                        {[
                            { label: "Location:", value: "Spain, Barcelona" },
                            { label: "Age:", value: "28" },
                            { label: "Email:", value: "me@support.com" },
                            { label: "Qualification:", value: "Master Degree" },
                            { label: "Gender:", value: "Female" },
                            { label: "Hourly Rate:", value: "$15-$20/hour" },
                            { label: "Availability:", value: "Mon - Fri | 9AM - 5PM" },
                        ].map(({ label, value }, i, arr) => (
                            <div key={i}>
                                <hr className="my-5 opacity-20" />
                                <div>
                                    <p className="opacity-50 font-normal mb-1">{label}</p>
                                    <p className="opacity-100 font-medium mb-0">{value}</p>
                                </div>
                                {i === arr.length - 1 && <hr className="my-5 opacity-20" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="lg:w-[75%]">
                    {/* OVERVIEW */}
                    <div className="rounded-2xl lg:rounded-[1vw] border border-[#19191926] p-5 lg:py-[1.3vw] lg:px-[2vw]">
                        <h4 className="relative -top-8 lg:-top-[2.4vw] bg-white w-fit px-3">
                            Overview
                        </h4>
                        <p>
                            Hello my name is Malissa Tania and I’m a Financial Supervisor from
                            Netherlands, Rotterdam. In pharetra orci dignissim, blandit mi
                            semper, ultricies diam. Suspendisse malesuada suscipit nunc non
                            volutpat. Sed porta nulla id orci laoreet tempor non consequat enim.
                            Sed vitae aliquam velit. Integer vehicula rhoncus molestie. Morbi
                            ornare ipsum sed sem condimentum, et pulvinar tortor luctus.
                        </p>
                        <p>
                            Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat,
                            blandit at pretium et, accumsan ac est. Integer vehicula rhoncus
                            molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor
                            luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris
                            nec.
                        </p>
                    </div>

                    {/* SKILLS */}
                    <div className="rounded-2xl lg:rounded-[1vw] border border-[#19191926] p-5 lg:py-[1.3vw] lg:px-[2vw] mt-15">
                        <h4 className="relative -top-8 lg:-top-[2.4vw] bg-white w-fit px-3">
                            Skills
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 lg:gap-[1vw]">
                            {[
                                "Surgery",
                                "Treatment",
                                "Empathy",
                                "Decision-making",
                                "Observation",
                                "Teamwork",
                                "Attention-to-detail",
                                "Anesthesia",
                                "Pathology",
                                "Laboratory",
                                "Counseling",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="py-2 px-4 lg:py-[.5vw] lg:px-[1.5vw] bg-[#F6F6F6] border border-[#CCCCCC] rounded-full text-[#00565F] font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="rounded-2xl lg:rounded-[1vw] border border-[#19191926] p-5 lg:py-[1.3vw] lg:px-[2vw] mt-15">
                        <h4 className="relative -top-8 lg:-top-[2.4vw] bg-white w-fit px-3">
                            Education
                        </h4>
                        <div className="space-y-8">
                            {[
                                {
                                    id: 1,
                                    uni: "University of Boston",
                                    title: "Bachelor Degree of Lorem Ipsum",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod lorem at lectus elementum, in sodales ipsum iaculis.",
                                },
                                {
                                    id: 2,
                                    uni: "Medical College",
                                    title: "Vet Practice Course",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis.",
                                },
                            ].map(({ id, uni, title, desc }, i) => (
                                <div
                                    key={id}
                                    className="relative flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 last:after:hidden"
                                >
                                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center border border-footer h-10 w-10 lg:h-[3vw] lg:w-[3vw] rounded-full shadow-xl bg-white">
                                        <span className="font-semibold text-footer">{id}</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-medium text-footer">{uni}</span>
                                        <h6 className="mt-2">{title}</h6>
                                        <p className="mt-4">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WORK EXPERIENCE */}
                    <div className="rounded-2xl lg:rounded-[1vw] border border-[#19191926] p-5 lg:py-[1.3vw] lg:px-[2vw] mt-15 shadow-xl">
                        <h4 className="relative -top-8 lg:-top-[2.4vw] bg-white w-fit px-3">
                            Work Experience
                        </h4>
                        <div className="space-y-8">
                            {[
                                {
                                    id: 1,
                                    date: "02/03/18 - 13/05/20",
                                    title: "Veterinary (Bacha Khan Medical Complex)",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod lorem at lectus elementum, in sodales ipsum iaculis.",
                                },
                                {
                                    id: 2,
                                    date: "02/07/20 - 13/09/22",
                                    title: "Junior Veterinary (DHQ)",
                                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum primis.",
                                },
                            ].map(({ id, date, title, desc }, i) => (
                                <div
                                    key={id}
                                    className="relative flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-6 last:after:hidden"
                                >
                                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center border border-footer h-10 w-10 lg:h-[3vw] lg:w-[3vw] rounded-full shadow-xl bg-white">
                                        <span className="font-semibold text-footer">{id}</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-medium text-footer">{date}</span>
                                        <h6 className="mt-2">{title}</h6>
                                        <p className="mt-4">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* REVIEWS */}
                    <div className="rounded-2xl lg:rounded-[1vw] border border-[#19191926] p-5 lg:py-[1.3vw] lg:px-[2vw] mt-15 shadow-xl">
                        <h4 className="relative -top-8 lg:-top-[2.4vw] bg-white w-fit px-3">
                            Reviews
                        </h4>

                        {[1, 2, 3].map((_, i) => (
                            <div key={i}>
                                <div>
                                    <h6 className="mb-3">Lorem Ipsum - Part time</h6>
                                    <div className="flex items-end">
                                        {Array(5)
                                            .fill()
                                            .map((_, j) => (
                                                <img
                                                    key={j}
                                                    src="/svg/star.svg"
                                                    className="w-4 lg:w-[1vw]"
                                                    alt="star rating"
                                                />
                                            ))}
                                        <span className="text-[11px] lg:text-[.7vw] leading-none font-semibold mx-2">
                                            5.00
                                        </span>
                                        <span className="text-[11px] lg:text-[.7vw] leading-none opacity-50">
                                            Dec 2, 2023 - Jan 28, 2024
                                        </span>
                                    </div>
                                    <p className="pt-4">
                                        “I had the pleasure of working with Malissa recently and cannot
                                        recommend them enough. Their speed of work, coupled with an
                                        impressive receptiveness to feedback, ensured a great experience.”
                                    </p>
                                </div>
                                {i !== 2 && <hr className="my-5 opacity-20" />}
                            </div>
                        ))}

                        <div className="flex items-center justify-center mt-10">
                            <Button text="Show All Reviews" className="font-normal" />
                        </div>
                    </div>

                    <Portfolio />
                </div>
            </div>
        </section>
    );
}
