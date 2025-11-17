"use client";

import { useState } from "react";
import { Plus, Minus, Search, XIcon, Sliders } from "lucide-react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { serviceData } from "@/data/data";
import CanvasDrawer from "@/components/common/CanvasDrawer";
import Link from "next/link";

// --- SideBar Component ---
const SideBar = ({ openSections, toggleSection }) => (
    <div className="flex flex-col gap-7 lg:gap-[1.5vw] h-fit max-h-[85vh] overflow-auto sticky top-[20%] p-7 lg:p-0" style={{ scrollbarWidth: "none" }}>
        {/* Search */}
        <div className="relative w-full">
            <input
                type="search"
                name="service"
                placeholder="Search services"
                className="border border-zinc-200 rounded-full w-full"
            />
            <label htmlFor="service" className="bg-footer flex items-center justify-center h-8 w-8 lg:h-[2.5vw] lg:w-[2.5vw] rounded-full text-white absolute top-1/2 right-0 -translate-y-1/2">
                <Search className="size-4 lg:size-[1.2vw]" />
            </label>
        </div>

        {/* Category 1 */}
        <Section title="Main Categories" open={openSections.mainCategory} toggle={() => toggleSection("mainCategory")}>
            <ul className="space-y-3">
                {["Category - 1", "Category - 2", "Category - 3", "Category - 4"].map((type, i) => (
                    <li key={i} className="py-2 px-3 lg:py-[.8vw] text-[16px] lg:text-[1vw] flex items-center gap-1 lg:gap-[.4vw] lg:px-[1.5vw] bg-[#F6F6F6] rounded-full">
                        <img src="/svg/black-paw.svg" className="w-[1.2vw]" alt="" />
                        {type}
                    </li>
                ))}
            </ul>
        </Section>

        {/* Category 2 */}
        <Section title="Other Categories" open={openSections.category2} toggle={() => toggleSection("category2")}>
            <ul className="space-y-3">
                {["Category - 1", "Category - 2", "Category - 3", "Category - 4"].map((type, i) => (
                    <li key={i} className="py-2 px-3 lg:py-[.8vw] text-[16px] lg:text-[1vw] flex items-center gap-1 lg:gap-[.4vw] lg:px-[1.5vw] bg-[#F6F6F6] rounded-full">
                        <img src="/svg/black-paw.svg" className="w-[1.2vw]" alt="" />
                        {type}
                    </li>
                ))}
            </ul>
        </Section>
    </div>
);

// --- Section Component ---
const Section = ({ title, open, toggle, children }) => (
    <div>
        {/* Header */}
        <div
            className="flex justify-between items-center cursor-pointer select-none mb-2 rounded-full bg-footer w-full py-2 px-3 lg:py-[.8vw] lg:px-[1.5vw] text-white"
            onClick={toggle}
        >
            <h5 className="font-medium text-[14px] lg:text-[1vw]">{title}</h5>
            {open ? <Minus className="text-white transition-all duration-500" /> : <Plus className="text-white transition-all duration-500 rotate-90" />}
        </div>

        {/* Collapsible content */}
        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="mt-2">{children}</div>
        </div>
    </div>
);

// --- Main Component ---
export default function OurServices() {
    const [openSections, setOpenSections] = useState({
        mainCategory: true,
        category2: false,
    });

    const [isCanvasOpen, setIsCanvasOpen] = useState(false);

    const toggleSection = (key) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <section className="wrapper py-10 lg:py-[5vw] flex gap-[2vw]">
            {/* Desktop sidebar */}
            <aside className="w-[20%] hidden lg:block">
                <SideBar openSections={openSections} toggleSection={toggleSection} />
            </aside>

            {/* Main content */}
            <div className="lg:w-[80%]">
                {/* Mobile filter button */}
                <div className="flex justify-between lg:hidden mb-4">
                    <span>All Services</span>
                    <button
                        type="button"
                        onClick={() => setIsCanvasOpen(true)}
                        className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full"
                    >
                        <Sliders className="w-5 h-5" />
                        Filters
                    </button>
                </div>

                {/* Service cards */}
                {serviceData.map((service, index) => (
                    <div
                        key={index}
                        className={`bg-[#F6F6F6] rounded-2xl lg:rounded-[1vw] p-5 lg:p-[1.5vw] flex flex-col gap-[2vw] mb-10 ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                    >
                        <div className="relative h-50 lg:h-[20vw] w-full">
                            <Image src={service.image} className="rounded-2xl lg:rounded-[1vw] object-cover" fill priority alt={service.title} />
                        </div>

                        <div className="flex flex-col justify-between w-full mt-5 lg:mt-0">
                            <div>
                                <h6 className="mb-5">{service.title}</h6>
                                <p className="max-w-[90%] lg:max-w-[70%]">{service.description}</p>
                            </div>

                            <Link href="/booking" className="flex items-center justify-between mt-10">
                                <img src={service.icon} className="w-7 lg:w-[2vw]" alt={service.title} />
                                <Button text="Book Now" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile CanvasDrawer */}
            <CanvasDrawer
                open={isCanvasOpen}
                onClose={() => setIsCanvasOpen(false)}
                header={
                    <>
                        <h4 className="text-lg font-medium">Filters</h4>
                        <button onClick={() => setIsCanvasOpen(false)}>
                            <XIcon className="w-6 h-6 text-gray-700" />
                        </button>
                    </>
                }
            >
                <SideBar openSections={openSections} toggleSection={toggleSection} />
            </CanvasDrawer>
        </section>
    );
}
