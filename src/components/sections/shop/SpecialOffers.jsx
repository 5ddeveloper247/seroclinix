import Image from "next/image"
import Button from "@/components/common/Button"
// import { packageData } from "@/data/data"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Packages() {

    const { data } = useSelector(state => state.products);
    const pricingPlans = data?.pricing_plans || [];

    const planImages = [
        "/svg/pkg-one.svg",
        "/svg/pkg-two.svg",
        "/svg/pkg-three.svg",
    ];


    return (
        <section className="h-fit w-full relative bg-center bg-cover" style={{ backgroundImage: "url('/images/package/package.jpg')" }}>
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-90 wrapper">
                <div className="py-40 flex flex-col items-center justify-center">
                    <div className="text-center lg:w-1/2 mb-10">
                        <h2 className="font-pat text-primary mb-4! lg:mb-0! leading-none">
                            Special Offers
                        </h2>
                        <h2 className="text-white mb-5! lg:mb-0!">Special Offers & Bundles.</h2>
                        <p className="text-white opacity-100">We pride ourselves on offering personalized attention tailored to meet the unique needs of each pet. Our state-of-the-art facilities are equipped with the latest technology to deliver.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[2vw]">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={plan.id}
                                className="bg-white p-7 lg:p-[2vw] rounded-2xl lg:rounded-[1vw] w-full hover:shadow-lg transition duration-300"
                            >
                                {/* Header */}
                                <div className="flex flex-col gap-[.5vw] items-center justify-center text-center">
                                    <img
                                        src={planImages[index] || "/svg/pkg-one.svg"}
                                        className="w-15 lg:w-[4vw]"
                                        alt={plan.title}
                                    />
                                    <h6>{plan.title}</h6>
                                    <span>{plan.heading}</span>
                                </div>

                                <hr className="my-7 opacity-10" />

                                {/* Description */}
                                <p className="text-center opacity-100 font-medium">{plan.description}</p>

                                <hr className="my-7 opacity-10" />

                                {/* Price Section */}
                                <h3 className="flex flex-wrap items-center justify-center gap-1 leading-none text-center">
                                    {plan.price} /
                                    <span className="font-normal">{plan.price_suffix}</span>
                                </h3>

                                {/* Button */}
                                <Link href="/booking">
                                    <Button text="Book Now" className="w-full justify-center mt-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
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