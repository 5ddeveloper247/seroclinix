"use client";

import Button from "@/components/common/Button";
import { useCallback } from "react";

export default function FormSection() {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
    }, []);

    return (
        <section className="wrapper">
            {/* Heading */}
            <div className="my-10 lg:my-[3vw]">
                <h2 className="font-pat leading-none mb-10 lg:mb-0! text-primary">Reach Out</h2>
                <h2>Get In Touch</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Maecenas posuere fusce neque
                    porta tempor donec.
                </p>
            </div>

            {/* Form */}
            <div className="flex gap-9 lg:gap-[3vw] flex-col lg:flex-row justify-between">
                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-wrap gap-5 lg:gap-[2vw] lg:w-2/3"
                    noValidate
                >
                    {/* Name */}
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="name" className="block mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            placeholder="Your full name"
                        />
                    </div>

                    {/* Email */}
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="phone" className="block mb-1">
                            Phone number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            pattern="[\d\s()+-]{7,20}"
                            className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            placeholder="+1 (555) 555-5555"
                        />
                    </div>

                    {/* Referrer */}
                    <div className="w-full md:w-[48%]">
                        <label htmlFor="referrer" className="block mb-1">
                            How did you hear about us?
                        </label>
                        <select
                            id="referrer"
                            name="referrer"
                            className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select an option
                            </option>
                            <option value="google">Google / Search</option>
                            <option value="social">Social Media</option>
                            <option value="friend">Friend / Colleague</option>
                            <option value="ad">Advertisement</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="w-full">
                        <label htmlFor="message" className="block mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={10}
                            className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            placeholder="How can we help?"
                        />
                    </div>

                    {/* Actions */}
                    <div className="w-full flex items-center gap-3">
                        <Button
                            text="Send Message"
                            iconSrc="/svg/paw.svg"
                            className="py-4 lg:py-[1vw]!"
                        />
                    </div>
                </form>

                {/* CONTACT INFO + MAP */}
                <div className="lg:w-1/3 flex flex-col gap-5 lg:gap-[1vw]">
                    {/* Contact Boxes */}
                    <div className="flex items-center gap-4 bg-[#30AFB7] p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/phone-white.svg" className="w-20 lg:w-[4vw]" alt="Phone" />
                        <div className="text-white">
                            <h4 className="font-light mb-2">+01 234 567890</h4>
                            <p className="opacity-100">
                                Call us directly if you need any urgent help. Our agents will help you.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-primary p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/calender.svg" className="w-20 lg:w-[4vw]" alt="Email" />
                        <div className="text-white">
                            <h4 className="font-light mb-2">info@business.com</h4>
                            <p className="opacity-100">
                                Email us directly if you need any help. Our agents will help you.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#00565F] p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/clock-white.svg" className="w-20 lg:w-[4vw]" alt="Clock" />
                        <div className="text-white w-full">
                            <h4 className="font-light mb-2">Working Hours</h4>
                            <div className="flex justify-between">
                                <span>Mon - Fri:</span>
                                <span>7am - 6pm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday:</span>
                                <span>9am - 4pm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday:</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-[1.5vw] h-[250px] lg:h-[40vw] mt-6 lg:mt-[4vw]">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019799611276!2d-122.41941518468162!3d37.77492977975937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6b8b6b7b%3A0xb0b53a5d8efb9e0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1674837286471!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
