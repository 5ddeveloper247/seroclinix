"use client";

import { useSelector } from "react-redux";
import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { aboutCards, featuresList } from "@/data/data.js";
import { Skeleton } from "@heroui/react";


export default function AboutSection() {
  const { data, loading } = useSelector((state) => state.home);

  const about = data?.about;

  if (loading || !about) {
    return (
      <section className="py-[6vw]">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
          {/* Skeleton for Image */}
          <Skeleton className="h-130 w-full lg:h-[40vw] rounded-4xl lg:rounded-[2vw]" />

          <div className="flex flex-col justify-center space-y-4">
            {/* Skeletons for Titles & Text */}
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-5/6" />

            {/* Skeleton for Features List */}
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Skeleton for Button */}
            <Skeleton className="h-14 w-full lg:w-[40%] rounded-lg" />

            {/* Skeleton for Emergency Call */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-14 w-14 rounded-full" />
              <div className="flex flex-col space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton for About Cards */}
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 my-15">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start gap-4 lg:gap-[2vw] pt-9 lg:px-[3vw]">
              <Skeleton className="h-10 w-10 lg:h-[4vw] lg:w-[4vw] rounded-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-[6vw]">
      {/* TOP ABOUT */}
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-[8vw]">
        <div className="relative h-130 w-full lg:h-[40vw]">
          <Image
            src={about.image?.value}
            alt="About image"
            fill
            className="object-cover rounded-4xl lg:rounded-[2vw]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-pat sub-title text-[40px] lg:text-[2.4vw] leading-none text-primary mb-3!">
            {about.title?.value}
          </h2>

          <h2 className="text-heading mb-5!">
            {about.heading?.value}
          </h2>

          <p className="opacity-50">
            {about.description?.value}
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

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-[2vw] mt-5 lg:mt-[3vw]">
            <Button
              text="Read More"
              iconSrc="/svg/paw.svg"
              className="py-4 lg:py-[1.5vw]! w-full lg:w-[40%] justify-center"
            />

            <div className="w-full flex items-center gap-3 lg:gap-[1vw]">
              <div className="h-14 w-14 lg:h-[5vw] lg:w-[5vw] relative">
                <Image src="/svg/phone.svg" alt="Phone icon" fill />
              </div>

              <div>
                <span className="opacity-50">Emergency call</span>
                <h4 className="mt-1">1 500-905 01 99</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT CARDS */}
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
