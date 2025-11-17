import Image from "next/image";
import { membersData } from "@/data/data.js";

export default function OurMembers() {
    return (
        <section>
            <div className="wrapper py-15 lg:py-[6vw]">
                {/* Section Header */}
                <div className="text-center mb-10 lg:mb-[4vw] lg:max-w-[50vw] mx-auto">
                    <h2 className="font-pat leading-none mb-10 text-primary">Who We Are</h2>
                    <h2 className="text-heading">
                        Dedicated to delivering exceptional care & services.
                    </h2>
                    <p>
                        We pride ourselves on offering personalized attention tailored to meet the unique needs of each pet. Our state-of-the-art facilities are equipped with the latest technology to deliver.
                    </p>
                </div>

                {/* Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {membersData.map((member) => (
                        <div key={member.id} className="text-center bg-[#F6F6F6] p-4 lg:p-[1.5vw] rounded-3xl lg:rounded-[2vw]">
                            <div className="relative w-full aspect-[1.3/1] mb-4">
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-3xl lg:rounded-[2vw]"
                                />
                            </div>

                            <h4 className="mb-0">{member.name}</h4>
                            <span className="text-gray-500">{member.profession}</span>

                            <div className="flex items-center justify-center gap-4 lg:gap-[1vw] mt-5">
                                <img src="/svg/facebook.svg" className="w-6 lg:w-[1.2vw]" alt="" />
                                <img src="/svg/insta.svg" className="w-6 lg:w-[1.2vw]" alt="" />
                                <img src="/svg/tiktok.svg" className="w-6 lg:w-[1.2vw]" alt="" />
                                <img src="/svg/youtube.svg" className="w-6 lg:w-[1.2vw]" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
