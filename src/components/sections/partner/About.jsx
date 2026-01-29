import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { partnerCards, featuresList } from "@/data/data.js";

export default function About() {
  return (
    <section className="py-[6vw]">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
        <div className="relative h-130 w-full lg:h-[30vw] order-2">
          <Image
            src="/images/home/about.png"
            alt="About image"
            fill
            className="object-cover rounded-4xl lg:rounded-[2vw]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center order-1">
          <h2 className="font-pat sub-title text-[40px] lg:text-[2.4vw] leading-none text-primary mb-3!">
            Types of Partnership
          </h2>
          <h2 className="text-heading mb-5!">
            Partner With Us as an Investor{" "}
          </h2>

          <p className="opacity-50">
            Our veterinary team is committed to providing safe, effective, and
            compassionate care for pets of all ages
          </p>

          <p className="opacity-50">
            Lorem ipsum dolor sit amet consectetur. Massa aliquam id ullamcorper
            nisl. Tortor elit libero velit molestie scelerisque velit id. Ligula
            id turpis pretium urna dolor. Nulla ut suspendisse nisl sit
            consequat et feugiat. Sed nec velit ac augue. At volutpat facilisis
            vitae sit sit turpis vitae cursus viverra. Nisi aliquet elementum
            sapien faucibus nisl proin eu pharetra massa. Ultrices facilisis
            justo tellus nibh dictumst.
          </p>

        </div>
      </div>

      <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 my-15! lg:mt-[5vw]!">
        {partnerCards.map((card, idx) => (
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

          </div>
        ))}
      </div>
    </section>
  );
}
