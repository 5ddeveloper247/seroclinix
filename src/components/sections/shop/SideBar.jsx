"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Minus, Search } from "lucide-react";

export default function Sidebar({
    products = [],
    categories = [],
    tags = [],
    filters,
    setFilters,
}) {

    if (!filters) return null;


    /* ================= PRICE RANGE (UNCHANGED UI) ================= */
    const barRef = useRef(null);
    const maxValue = 1000;

    const valueToPercent = (value) => (value / maxValue) * 100;
    const percentToValue = (percent) =>
        Math.round((percent / 100) * maxValue);

    const handleDrag = (e, type) => {
        e.preventDefault();
        const bar = barRef.current;
        const barRect = bar.getBoundingClientRect();

        const moveHandler = (moveEvent) => {
            let newPercent =
                ((moveEvent.clientX - barRect.left) / barRect.width) * 100;
            newPercent = Math.min(Math.max(newPercent, 0), 100);
            const newValue = percentToValue(newPercent);

            if (type === "min") {
                if (newValue >= filters.price.max) return;
                setFilters((p) => ({
                    ...p,
                    price: { ...p.price, min: newValue },
                }));
            } else {
                if (newValue <= filters.price.min) return;
                setFilters((p) => ({
                    ...p,
                    price: { ...p.price, max: newValue },
                }));
            }
        };

        const upHandler = () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseup", upHandler);
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseup", upHandler);
    };

    /* ================= COLLAPSE STATE (UNCHANGED) ================= */
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
        <aside className="py-10 px-5 lg:py-0 lg:px-0 w-full sticky top-[15%] left-0">
            <div
                className="flex flex-col gap-7 lg:gap-[1.5vw] h-full max-h-[78vh] overflow-auto"
                style={{ scrollbarWidth: "none" }}
            >
                {/* ================= SEARCH ================= */}
                <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search services"
                        className="border border-zinc-200 rounded-full w-full"
                        value={filters.search}
                        onChange={(e) =>
                            setFilters((p) => ({ ...p, search: e.target.value }))
                        }
                    />
                    <span className="bg-primary flex items-center justify-center h-8 w-8 lg:h-[2.5vw] lg:w-[2.5vw] rounded-full text-white absolute top-1/2 right-0 -translate-y-1/2">
                        <Search className="size-4 lg:size-[1.2vw]" />
                    </span>
                </div>

                {/* ================= CATEGORIES ================= */}
                <Section
                    title="Shop By Categories"
                    open={openSections.jobType}
                    toggle={() => toggleSection("jobType")}
                >
                    <ul className="space-y-3">
                        {categories.map((cat) => (
                            <li
                                key={cat.id}
                                onClick={() =>
                                    setFilters((p) => ({
                                        ...p,
                                        category: cat.id,
                                    }))
                                }
                                className={`py-2 px-3 lg:py-[.8vw] text-[16px] lg:text-[1vw] flex items-center justify-between gap-1 lg:gap-[.4vw] lg:px-[1.5vw] bg-[#F6F6F6] rounded-full ${filters.category === cat.id
                                        ? "border-2 border-footer"
                                        : ""
                                    }`}
                            >
                                <div className="flex items-center gap-1">
                                    <img src="/svg/black-paw.svg" className="w-[1.2vw]" />
                                    {cat.name}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* ================= PRICE RANGE ================= */}
                <Section
                    title="Price Range"
                    open={openSections.price}
                    toggle={() => toggleSection("price")}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="number"
                            value={filters.price.min}
                            onChange={(e) =>
                                setFilters((p) => ({
                                    ...p,
                                    price: {
                                        ...p.price,
                                        min: Math.min(
                                            Number(e.target.value),
                                            p.price.max - 1
                                        ),
                                    },
                                }))
                            }
                            className="w-1/3 border border-gray-300 bg-white rounded-sm px-2 py-1 text-sm"
                        />
                        <div className="h-[1.2px] w-10 bg-black opacity-10" />
                        <input
                            type="number"
                            value={filters.price.max}
                            onChange={(e) =>
                                setFilters((p) => ({
                                    ...p,
                                    price: {
                                        ...p.price,
                                        max: Math.max(
                                            Number(e.target.value),
                                            p.price.min + 1
                                        ),
                                    },
                                }))
                            }
                            className="w-1/3 border border-gray-300 bg-white rounded-sm px-2 py-1 text-sm"
                        />
                    </div>

                    <div
                        ref={barRef}
                        className="relative h-1 w-full bg-gray-200 rounded-full mb-3"
                    >
                        <div
                            className="absolute h-1 bg-primary rounded-full"
                            style={{
                                left: `${valueToPercent(filters.price.min)}%`,
                                width: `${valueToPercent(filters.price.max) -
                                    valueToPercent(filters.price.min)
                                    }%`,
                            }}
                        />
                        <div
                            className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                                left: `${valueToPercent(filters.price.min)}%`,
                            }}
                            onMouseDown={(e) => handleDrag(e, "min")}
                        />
                        <div
                            className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                            style={{
                                left: `${valueToPercent(filters.price.max)}%`,
                            }}
                            onMouseDown={(e) => handleDrag(e, "max")}
                        />
                    </div>
                </Section>

                {/* ================= PRODUCTS LIST ================= */}
                <Section
                    title="Products"
                    open={openSections.products}
                    toggle={() => toggleSection("products")}
                >
                    <ul className="space-y-4">
                        {products.map((product) => (
                            <li
                                key={product.id}
                                className="flex items-center gap-4 bg-[#F6F6F6] py-2 px-3 rounded-xl"
                            >
                                <img
                                    src={product.images?.[0]}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">
                                        {product.name}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        ${product.pricing.final_price}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* ================= TAGS ================= */}
                <Section
                    title="Filter By Tags"
                    open={openSections.tag}
                    toggle={() => toggleSection("tag")}
                >
                    <div className="flex flex-wrap gap-2 bg-[#F6F6F6] p-4 rounded-2xl">
                        {tags.map((tag) => (
                            <span
                                key={tag.id}
                                onClick={() =>
                                    setFilters((p) => ({ ...p, tag: tag.id }))
                                }
                                className={`py-2 px-4 border bg-white rounded-full cursor-pointer ${filters.tag === tag.id
                                        ? "border-primary"
                                        : "border-[#1919194D]"
                                    }`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </Section>
            </div>
        </aside>
    );
}

/* ================= COLLAPSIBLE SECTION (UNCHANGED) ================= */
const Section = ({ title, open, toggle, children }) => (
    <div>
        <div
            className="flex justify-between items-center cursor-pointer select-none mb-2 rounded-full bg-footer w-full py-2 px-3 lg:py-[.8vw] lg:px-[1.5vw] text-white"
            onClick={toggle}
        >
            <h5 className="font-medium text-[14px] lg:text-[1vw]">{title}</h5>
            {open ? (
                <Minus className="w-5 h-5 transition-all duration-600 rotate-0" />
            ) : (
                <Plus className="w-5 h-5 transition-all duration-600 rotate-90" />
            )}
        </div>

        <div
            className={`transition-all duration-600 ease-in-out overflow-hidden ${open ? "max-h-[600px]" : "max-h-0"
                }`}
        >
            <div className="mt-2">{children}</div>
        </div>
    </div>
);
