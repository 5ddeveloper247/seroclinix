import Image from "next/image"
import ServiceHeading from "@/components/common/ServiceHeading"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { partnerData } from "@/data/data.js"

export default function WhyInvest() {
    return (
      <section className="bg-second-bg">
        <div className="wrapper py-15 lg:py-[7vw]">
          <div className="text-center">
            <h2 className="font-pat text-[40px] text-primary mb-0!">
              Why Partner
            </h2>
            <h2 className="text-heading flex justify-center items-end gap-1">
              Partnership
              <span>
                <Image
                  src="/svg/heart.svg"
                  className="w-10 lg:w-[3vw]"
                  width={100}
                  height={100}
                  alt="Dog Image"
                />{" "}
              </span>
              Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[3vw] mt-10">
            {/* Left Feature Card */}
            <div className="d_card relative overflow-hidden rounded-4xl lg:rounded-[2vw] flex items-center gap-[.7vw] bg-primary p-10 lg:p-0 min-h-75">
              <Image
                src="/images/home/doggy.png"
                className="absolute bottom-[-6%] left-[-15%] lg:bottom-[-10%] lg:left-[-3.5vw] w-45 lg:w-[12vw]"
                width={100}
                height={100}
                alt="Dog Image"
              />
              <h3 className="text-white py-10 px-6 lg:px-[8vw]! lg:py-[4.5vw]! leading-none text-center lg:text-center">
                What partners gain
              </h3>
            </div>

            {/* Dynamic service cards */}
            {partnerData.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-center bg-white rounded-4xl lg:rounded-[2vw] p-5 lg:p-[2vw] gap-5 lg:gap-[1vw] min-h-75"
              >
                <div className="relative h-25 w-25 lg:h-[6vw] lg:w-[6vw]">
                  <Image
                    src={service.image}
                    className="rounded-[50px] object-cover"
                    fill
                    alt={service.title}
                  />
                </div>

                <h4>{service.title}</h4>
                <p className="mb-0!">{service.description}</p>
              </div>
            ))}

            {/* Last large image */}
            <div>
              <div className="relative h-full w-full min-h-75">
                <Image
                  src="/images/home/dog-friend.jpg"
                  className="rounded-[50px] object-cover"
                  fill
                  alt="Dog Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
