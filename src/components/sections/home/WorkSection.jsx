import Image from "next/image"
import Button from "@/components/common/Button"

export default function WorkSection() {
    return (
        <>
            <section className="relative overflow-hidden">
                <div className="wrapper flex flex-col lg:flex-row py-15 lg:py-[7vw] gap-10 lg:gap-[4vw]">
                    <div className="lg:w-2/3">
                        <h2 className="font-pat text-primary mb-0! leading-none">Work Process</h2>
                        <h2 className="text-heading leading-none">
                            Simple steps to
                            exceptional care
                            for your pet.
                        </h2>

                        <hr className="opacity-10 my-8 lg:my-[3vw]" />

                        <div className="flex items-start gap-6 lg:gap-[1.5vw] mb-6 lg:mb-[1vw]">
                            <img src="/svg/initial.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Initial Consultation</h4>
                                <p>
                                    Our initial consultation offers a comprehen-
                                    sive health assessment.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 lg:gap-[1.5vw] mb-6 lg:mb-[1vw]">
                            <img src="/svg/health.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Health Assessment</h4>
                                <p>
                                    A health assessment provides a thorough
                                    evaluation of your pet’s.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 lg:gap-[1.5vw]">
                            <img src="/svg/treatment.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Treatment Plan</h4>
                                <p>
                                    A tailored treatment plan ensures your pet
                                    receives the most effective.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col lg:flex-row items-start lg:items-end gap-5 lg:gap-[2vw]">
                        <img src="/images/home/work-one.png" className="w-2/3 lg:w-[30vw] lg:h-[40vw] object-cover rounded-[2vw]" alt="Work Process" />
                        <div className="w-2/4 h-fit lg:w-[25vw] lg:h-[17vw] bg-[#E1E2DD] rounded-[2vw] border border-[#FFFDF9] border-[.5vw] absolute top-[2vw] right-0 z-10 mt-[1vw]">
                            <img src="/images/home/work-two.png" className="w-full object-cover rounded-[2vw] -mt-[4vw]" alt="Work Process" />
                        </div>

                        <div className="flex flex-col gap-1 lg:gap-[.7vw]">
                            <h6 className="text-primary">Reach Out</h6>
                            <p>Talk to us and see how we work together</p>
                            <Button
                                text="Contact Us"
                                iconSrc="/svg/paw.svg"
                                className="py-3 px-4 lg:py-[1.2vw]! lg:px-[2vw] w-fit"
                            />
                        </div>

                        <img src="/svg/paw-light.svg" className="absolute bottom-[-6vw] right-[-6vw]" alt="" />
                    </div>
                </div>
            </section>

            <section className="h-[80vh] lg:h-[90vh] w-full relative bg-center bg-cover" style={{ backgroundImage: "url('/images/home/store.jpg')" }}>
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

                <div className="h-full w-full flex flex-col items-center justify-center">
                    <h2 className="font-pat text-primary text-[40px] leading-none !mb-0">Online Store</h2>
                    <h1 className="leading-none text-center text-white text-[60px] lg:text-[6vw] mb-[2.5vw]">
                        Top Picks for <br />
                        Your Beloved Pets
                    </h1>
                    <Button
                        text="Order Your Kit"
                        iconSrc="/svg/paw.svg"
                        className="px-6 py-3 lg:py-[1.2vw]! lg:px-[2vw] w-fit"
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