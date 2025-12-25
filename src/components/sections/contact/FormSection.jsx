"use client";

import Button from "@/components/common/Button";
import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactPage } from "../../../store/thunk/contactThunk";
import { toast } from "react-toastify";
import axios from "axios";

export default function FormSection() {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.contact);

    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        referrer: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    // New state for contact info
    const [contactInfo, setContactInfo] = useState({
        phone: "",
        email: "",
        location: "",
        working_hours: {
            weekdays: "",
            saturday: "",
            sunday: "",
        },
    });

    // Fetch contact info from API
    useEffect(() => {
        axios
        const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/sero-clinix/website-settings`;

        axios.get(API_URL)
            .then((res) => {
                if (res.data.success) {
                    const data = res.data.data;
                    setContactInfo({
                        phone: data.contact_phone || "",
                        email: data.contact_email || "",
                        location: data.contact_location || "",
                        working_hours: {
                            weekdays: data.working_hours.weekdays || "7am - 6pm",
                            saturday: data.working_hours.saturday || "9am - 4pm",
                            sunday: data.working_hours.sunday || "Closed",
                        },
                    });
                }
            })
            .catch((err) => {
                console.error("Failed to fetch contact info:", err);
            });

    }, []);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Please enter your name";

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (form.phone && !/^[\d\s()+-]{7,20}$/.test(form.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!form.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            const payload = {
                name: form.name,
                email: form.email,
                phone_number: form.phone,
                heard_about_us: form.referrer,
                message: form.message,
            };

            dispatch(fetchContactPage(payload))
                .unwrap()
                .then(() => {
                    toast.success("Message sent successfully!");
                    setSubmitted(true);
                })
                .catch(() => {
                    toast.error("Something went wrong. Please try again.");
                });
        },
        [dispatch, form]
    );


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

                {submitted ? (
                    <div className="flex flex-col items-center justify-center px-7 py-20 h-full lg:p-[5vw] bg-[#007D9C12] border border-second-bg rounded-2xl lg:rounded-[1vw] text-center">
                        <img src="/svg/thankyou.svg" className="w-20 lg:w-[7vw] mx-auto" alt="Thank You" />
                        <h3 className="text-2xl lg:text-4xl font-bold mb-4">
                            Thank you! We’ll get back to you soon
                        </h3>
                        <p className="lg:max-w-[70%]">
                            We have received your message and will get back to you as soon as possible.
                        </p>
                    </div>
                ) : (
                    // {/* FORM */ }
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-wrap gap-5 lg:gap-[2vw] lg:w-2/3"
                        noValidate
                    >
                        {/* Name */}
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="name" className="block mb-1">Name <span className="text-red-600">*</span></label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                                placeholder="Your full name"
                            />
                            {errors.name && (
                                <p className="mt-1 flex items-center gap-1 text-[0.8vw] opacity-100 text-red-600 border-0 rounded-md px-2">
                                    <span className="font-bold">!</span>
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* Email */}
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="email" className="block mb-1">Email <span className="text-red-600">*</span></label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 flex items-center gap-1 text-[0.8vw] opacity-100 text-red-600 border-0 rounded-md px-2">
                                    <span className="font-bold">!</span>
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* Phone */}
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="phone" className="block mb-1">Phone number <span className="text-red-600">*</span></label>
                            <input
                                id="phone"
                                name="phone"
                                type="number"
                                value={form.phone}
                                onChange={handleChange}
                                inputMode="tel"
                                pattern="[\d\s()+-]{7,20}"
                                className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                                placeholder="+1 (555) 555-5555"
                            />
                            {errors.phone && (
                                <p className="mt-1 flex items-center gap-1 text-[0.8vw] opacity-100 text-red-600 border-0 rounded-md px-2">
                                    <span className="font-bold">!</span>
                                    {errors.phone}
                                </p>
                            )}

                        </div>

                        {/* Referrer */}
                        <div className="w-full md:w-[48%]">
                            <label htmlFor="referrer" className="block mb-1">How did you hear about us?</label>
                            <select
                                id="referrer"
                                name="referrer"
                                value={form.referrer}
                                onChange={handleChange}
                                className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                            >
                                <option value="">Select an option</option>
                                <option value="google">Google / Search</option>
                                <option value="social">Social Media</option>
                                <option value="friend">Friend / Colleague</option>
                                <option value="ad">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="w-full">
                            <label htmlFor="message" className="block mb-1">Message <span className="text-red-600">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows={10}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full border border-zinc-300 px-3 py-2 rounded-md focus:border-zinc-100 focus:outline-none focus:ring"
                                placeholder="How can we help?"
                            />
                            {errors.message && (
                                <p className="mt-1 flex items-center gap-1 text-[0.8vw] opacity-100 text-red-600 border-0 rounded-md px-2">
                                    <span className="font-bold">!</span>
                                    {errors.message}
                                </p>
                            )}

                        </div>

                        {/* Actions */}
                        <div className="w-full flex items-center gap-3">
                            <Button
                                type="submit"
                                text={loading ? "Sending..." : "Send Message"}
                                iconSrc="/svg/paw.svg"
                                className="py-4 lg:py-[1vw]!"
                                disabled={loading}
                            />
                        </div>
                    </form>

                )}


                {/* CONTACT INFO + MAP */}
                <div className="lg:w-1/3 flex flex-col gap-5 lg:gap-[1vw]">
                    <div className="flex items-center gap-4 bg-[#30AFB7] p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/phone-white.svg" className="w-20 lg:w-[4vw]" alt="Phone" />
                        <div className="text-white">
                            <h4 className="font-light mb-2">{contactInfo.phone}</h4>
                            <p className="opacity-100">Call us directly if you need any urgent help. Our agents will help you.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-primary p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/calender.svg" className="w-20 lg:w-[4vw]" alt="Email" />
                        <div className="text-white">
                            <h5 className="font-light mb-2">{contactInfo.email}</h5>
                            <p className="opacity-100">Email us directly if you need any help. Our agents will help you.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 bg-[#00565F] p-6 lg:p-[1.5vw] rounded-3xl lg:rounded-[1.5vw]">
                        <img src="/svg/clock-white.svg" className="w-20 lg:w-[4vw]" alt="Clock" />
                        <div className="text-white w-full">
                            <h4 className="font-light mb-2">Working Hours</h4>
                            <div className="flex justify-between"><span>Mon - Fri:</span><span>{contactInfo.working_hours.weekdays}</span></div>
                            <div className="flex justify-between"><span>Saturday:</span><span>{contactInfo.working_hours.saturday}</span></div>
                            <div className="flex justify-between"><span>Sunday:</span><span>{contactInfo.working_hours.sunday}</span></div>
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
        </section >
    );
}
