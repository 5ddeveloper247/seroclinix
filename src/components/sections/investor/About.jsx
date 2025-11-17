import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { aboutCards, featuresList } from "@/data/data.js";

export default function About() {
    return (
        <section className="py-[6vw]">
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
                <div className="relative h-130 w-full lg:h-[30vw]">
                    <Image
                        src="/images/home/about.png"
                        alt="About image"
                        fill
                        className="object-cover rounded-4xl lg:rounded-[2vw]"
                        priority
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <h2 className="font-pat sub-title text-[40px] lg:text-[2.4vw] leading-none text-primary mb-3!">
                        About Leterinary
                    </h2>
                    <h2 className="text-heading mb-5!">
                        Partner With Us as an Investor
                    </h2>

                    <p className="opacity-50">
                        Our veterinary team is committed to providing safe, effective, and
                        compassionate care for pets of all ages
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
                </div>
            </div>


            <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 my-15! lg:mt-[5vw]!">
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
            </div>
        </section>
    );
}
