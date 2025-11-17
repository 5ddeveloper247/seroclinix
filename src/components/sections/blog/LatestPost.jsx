import Image from "next/image";
import Link from "next/link";

export default function LatestPost() {
    return (
        <section>
            <div className="wrapper py-15 lg:py-[6vw]">
                <h2 className="mb-7! lg:!mb-[3vw]">Latest Post</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3vw] bg-[#F6F6F6] p-3 lg:p-[1.3vw] rounded-[1vw]">
                    {/* Image Section */}
                    <div className="h-65 lg:h-[27vw] w-full relative">
                        <Image
                            src="/images/blog/blog-one.jpg"
                            alt="Latest Post"
                            fill
                            priority
                            className="rounded-[1vw] object-cover object-center"
                        />
                    </div>

                    {/* Content Section */}
                    <div>
                        <h3 className="text-[22px] lg:text-[1.5vw] font-semibold leading-snug mb-3">
                            Grooming experts present new methods for shedding control service
                        </h3>

                        <p className="text-gray-700 mb-5 leading-relaxed">
                            As the world shifts towards smarter solutions, Right Peeps is here to
                            turbocharge your business growth. We’re all about leveraging cutting-edge
                            tech and top-tier talent to help you scale fast, innovate, and crush your
                            goals. <br />
                            Let’s redefine success together—because when you outsource smart, you don’t
                            just save—you thrive.
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">26 December, 2022</span>
                            <Link href="/blogDetail">
                                <Image
                                    src="/svg/arrow-circle.svg"
                                    alt="Arrow"
                                    width={40}
                                    height={40}
                                    className="w-10 lg:w-[3vw]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
