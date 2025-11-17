"use client";

import { useState, useRef } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { products } from "@/data/data";

export default function Sidebar () {
    // Price range
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);
    const barRef = useRef(null);
    const maxValue = 1000;

    const valueToPercent = (value) => (value / maxValue) * 100;
    const percentToValue = (percent) => Math.round((percent / 100) * maxValue);

    const handleDrag = (e, type) => {
        e.preventDefault();
        const bar = barRef.current;
        const barRect = bar.getBoundingClientRect();

        const moveHandler = (moveEvent) => {
            let newPercent = ((moveEvent.clientX - barRect.left) / barRect.width) * 100;
            newPercent = Math.min(Math.max(newPercent, 0), 100);
            const newValue = percentToValue(newPercent);

            if (type === "min") {
                if (newValue >= max) return;
                setMin(newValue);
            } else {
                if (newValue <= min) return;
                setMax(newValue);
            }
        };

        const upHandler = () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseup", upHandler);
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseup", upHandler);
    };

    // Collapse state
    const [openSections, setOpenSections] = useState({
        category: true,
        jobType: false,
        products: false,
        price: false,
        brand: false,
        tag: false,
    });

    const toggleSection = (key) =>
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <aside className="py-10 px-5 lg:py-0 lg:px-0 w-full sticky top-[20%] left-0">
            <div className="flex flex-col gap-7 lg:gap-[1.5vw] h-full max-h-[70vh] overflow-auto" style={{ scrollbarWidth: "none" }}>

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

                {/* Job Type */}
                <Section title="Job Type" open={openSections.jobType} toggle={() => toggleSection("jobType")}>
                    <ul className="space-y-3">
                        {["Birds", "Cats", "Chew Toys", "Dogs", "Hamster", "Special Edition", "Toys"].map((cat, i) => (
                            <li key={i} className="py-2 px-3 lg:py-[.8vw] text-[16px] lg:text-[1vw] flex items-center justify-between gap-1 lg:gap-[.4vw] lg:px-[1.5vw] bg-[#F6F6F6] rounded-full">
                                <div className="flex items-center gap-1">
                                    <img src="/svg/black-paw.svg" className="w-[1.2vw]" alt="" />
                                    {cat}
                                </div>
                                <span>(12)</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Price Range */}
                <Section title="Price Range" open={openSections.price} toggle={() => toggleSection("price")}>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="number"
                            value={min}
                            onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
                            className="w-1/3 border border-gray-300 bg-white rounded-sm px-2 py-1 text-sm"
                        />
                        <div className="h-[1.2px] w-10 bg-black opacity-10"></div>
                        <input
                            type="number"
                            value={max}
                            onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
                            className="w-1/3 border border-gray-300 bg-white rounded-sm px-2 py-1 text-sm"
                        />
                    </div>

                    <div ref={barRef} className="relative h-1 w-full bg-gray-200 rounded-full mb-3">
                        <div
                            className="absolute h-1 bg-primary rounded-full"
                            style={{
                                left: `${valueToPercent(min)}%`,
                                width: `${valueToPercent(max) - valueToPercent(min)}%`,
                            }}
                        />
                        <div
                            className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ left: `${valueToPercent(min)}%` }}
                            onMouseDown={(e) => handleDrag(e, "min")}
                        />
                        <div
                            className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                            style={{ left: `${valueToPercent(max)}%` }}
                            onMouseDown={(e) => handleDrag(e, "max")}
                        />
                    </div>
                </Section>

                {/* Products List */}
                <Section title="Products" open={openSections.products} toggle={() => toggleSection("products")}>
                    <ul className="space-y-4">
                        {products.map((product, i) => (
                            <li key={i} className="flex items-center gap-4 bg-[#F6F6F6] py-2 px-3 lg:py-[.8vw] lg:px-[1.3vw] rounded-xl lg:rounded-[.8vw]">
                                <img src={product.img} alt={product.name} className="w-16 h-16 lg:w-[4vw] lg:h-[4vw] object-cover rounded-lg" />
                                <div className="flex flex-col">
                                    <span className="text-sm lg:text-[.9vw] font-medium text-gray-800">{product.name}</span>
                                    <span className="text-sm lg:text-[.8vw] text-gray-500">{product.price}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Brands */}
                <Section title="Product Brands" open={openSections.brand} toggle={() => toggleSection("brand")}>
                    <ul className="space-y-4">
                        {["Product Brands", "Doggy Dive", "Glamour Gems", "Puppy Style"].map((item, i) => (
                            <li key={i} className="py-2 px-3 lg:py-[.8vw] text-[16px] lg:text-[1vw] flex items-center justify-between gap-1 lg:gap-[.4vw] lg:px-[1.5vw] bg-[#F6F6F6] rounded-full">
                                <div className="flex items-center gap-1">
                                    <img src="/svg/black-paw.svg" className="w-[1.2vw]" alt="" />
                                    {item}
                                </div>
                                <span>(12)</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* Tags */}
                <Section title="Filter By Tags" open={openSections.tag} toggle={() => toggleSection("tag")}>
                    <div className="space-y-1 flex flex-wrap gap-2 bg-[#F6F6F6] p-4 rounded-2xl lg:rounded-[1vw]">
                        {["Chicken Bone", "Cozy Pet Bed", "Custom Pet Tag", "Daily Bird Nutrition"].map((item, i) => (
                            <span key={i} className="py-2 px-4 border border-[#1919194D] bg-white rounded-full">
                                {item}
                            </span>
                        ))}
                    </div>
                </Section>
            </div>
        </aside>
    );
};

// Collapsible Section
const Section = ({ title, open, toggle, children }) => (
    <div>
        <div
            className="flex justify-between items-center cursor-pointer select-none mb-2 rounded-full bg-footer w-full py-2 px-3 lg:py-[.8vw] lg:px-[1.5vw] text-white"
            onClick={toggle}
        >
            <h5 className="font-medium text-[14px] lg:text-[1vw]">{title}</h5>
            {open ? (
                <Minus className="w-5 h-5 text-white transition-all duration-600 rotate-0" />
            ) : (
                <Plus className="w-5 h-5 text-white transition-all duration-600 rotate-90" />
            )}
        </div>
        <div className={`transition-all duration-600 ease-in-out overflow-hidden transform ${open ? "max-h-[600px]" : "max-h-0"}`}>
            <div className="mt-2">{children}</div>
        </div>
    </div>
);
