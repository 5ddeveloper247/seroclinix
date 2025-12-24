"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

export default function FaqSection({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null);

    // Optional: sort by display_order
    const sortedFaqs = [...faqs].sort(
        (a, b) => (a.display_order ?? 0) - (b.display_order ?? 0)
    );

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs.length) return null;

    return (
        <section className="wrapper py-15 lg:py-[6vw]">
            {/* Header */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between mb-10 lg:mb-[2vw]">
                <div className="lg:w-1/2 mb-3">
                    <h2 className="font-pat text-primary mb-4! lg:mb-0! leading-none">
                        Frequently Asked Questions
                    </h2>
                    <h2>Got questions? We've got answers!</h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[.9vw]">
                    <Link href="/faq" className="mb-0! text-nowrap opacity-40 font-normal">
                        More Questions?
                    </Link>

                    <Link href="/contact" className="w-full">
                        <Button
                            text="Let's Connect"
                            iconSrc="/svg/paw.svg"
                            className="py-3 lg:py-[.7vw] lg:px-[1vw] w-full justify-center gap-2"
                        />
                    </Link>
                </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-5 lg:space-y-[2vw]">
                {sortedFaqs.map((faq, index) => (
                    <div key={faq.id} className="border-b border-gray-200 pb-4">
                        <button
                            onClick={() => toggleFaq(index)}
                            className="flex justify-between items-center w-full text-left cursor-pointer"
                        >
                            <span
                                className={`text-[18px] lg:text-[1.2vw] font-semibold transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-gray-800"
                                    }`}
                            >
                                {index + 1}. {faq.question}
                            </span>

                            <span className="text-[1.5rem] transition-transform duration-300">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
