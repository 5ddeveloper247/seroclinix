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
                            <img src="/svg/submit.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Submit Application</h4>
                                <p>
                                    Our initial consultation offers a comprehen-
                                    sive health assessment.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 lg:gap-[1.5vw] mb-6 lg:mb-[1vw]">
                            <img src="/svg/approve.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Review & Approval </h4>
                                <p>
                                    A health assessment provides a thorough
                                    evaluation of your pet’s.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 lg:gap-[1.5vw]">
                            <img src="/svg/promote.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Start Promoting / Reselling</h4>
                                <p>
                                    A tailored treatment plan ensures your pet
                                    receives the most effective.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 lg:gap-[1.5vw]">
                            <img src="/svg/earning.svg" alt="" className="w-9 lg:w-[3.2vw]" />
                            <div>
                                <h4 className="mb-2 lg:mb-[.5vw]">Track Earnings</h4>
                                <p>
                                    A tailored treatment plan ensures your pet
                                    receives the most effective.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col lg:flex-row items-start lg:items-end gap-5 lg:gap-[2vw]">
                        <img src="/images/affiliate/affiliate1.png" className="w-2/3 lg:w-[30vw] lg:h-[40vw] object-cover rounded-[2vw]" alt="Work Process" />
                        <div className="w-2/4 h-fit lg:w-[25vw] lg:h-[17vw] bg-[#E1E2DD] rounded-[2vw] border border-[#FFFDF9] border-[.5vw] absolute top-[2vw] right-0 z-10 mt-[10vw]">
                            <img src="/images/affiliate/affiliate2.png" className="w-full object-cover rounded-[2vw] -mt-[4vw]" alt="Work Process" />
                        </div>

                        <img src="/svg/paw-light.svg" className="absolute bottom-[-6vw] right-[-6vw]" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}