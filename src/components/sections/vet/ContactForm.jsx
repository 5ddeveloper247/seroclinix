import Link from "next/link"
import Image from "next/image"
import Button from "@/components/common/Button"

export default function ContactForm() {
    return (
        <section className="h-screen w-full relative bg-center bg-cover" style={{ backgroundImage: "url('/images/home/store.jpg')" }}>
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

            <div className="flex items-center justify-end h-full w-full wrapper">
                <div className="bg-white p-6 lg:p-[2vw] rounded-2xl lg:rounded-[1vw] w-full lg:w-[36%]">
                    <h4 className="font-medium text-[#191919] mb-3">
                        Contact us for emergency services
                    </h4>
                    <p className="text-[#191919B2] mb-8 lg:mb-[2vw]">
                        Fill the form real quick to let us know what’s your emergency and we’ll get back to you as soon as possible!!
                    </p>

                    {/* Form */}
                    <form className="flex flex-col gap-5 text-left">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-[#191919] mb-2 font-medium">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-primary/30 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-[#191919] mb-2 font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-primary/30 focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-[#191919] mb-2 font-medium">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here..."
                                rows="5"
                                className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-primary/30 focus:outline-none resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <Button 
                            text="Next"
                            className="w-fit lg:px-[2vw]!"
                        />
                    </form>
                </div>
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
    )
}