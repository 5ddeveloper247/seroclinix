"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Plus, Minus, Search, Sliders } from "lucide-react";
import Image from "next/image";
import Button from "@/components/common/Button";
import CanvasDrawer from "@/components/common/CanvasDrawer";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Skeleton } from "@heroui/react";

// Sidebar Skeleton using library
const SidebarSkeleton = () => (
    <div className="flex flex-col gap-7 max-h-[85vh] sticky top-[20%] p-7 lg:p-0">
        <Skeleton className="h-10 w-full rounded-full" />
        {[1, 2].map((_, i) => (
            <div key={i}>
                <Skeleton className="h-10 w-full rounded-full mb-3" />
                <div className="space-y-2">
                    {[1, 2, 3, 4].map((__, j) => (
                        <Skeleton key={j} className="h-9 w-full rounded-full" />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

// Service card skeleton using library
const ServiceCardSkeleton = ({ reverse }) => (
    <div
        className={`bg-[#F6F6F6] rounded-2xl p-5 mb-10 flex flex-col lg:flex-row gap-6 ${reverse ? "lg:flex-row-reverse" : ""
            }`}
    >
        <Skeleton className="h-[220px] lg:h-[18vw] w-full rounded-2xl" />
        <div className="flex flex-col justify-between w-full gap-4">
            <div className="space-y-3">
                <Skeleton className="h-5 w-[60%] rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-[85%] rounded" />
            </div>
            <div className="flex justify-between items-center mt-6">
                <Skeleton className="h-8 w-8 rounded" />
                <Skeleton className="h-10 w-32 rounded-full" />
            </div>
        </div>
    </div>
);

// Sidebar
const Section = ({ title, open, toggle, children }) => (
    <div>
        <div
            className="flex justify-between items-center cursor-pointer select-none mb-2 rounded-full bg-footer w-full py-2 px-3 lg:py-[.8vw] lg:px-[1.5vw] text-white"
            onClick={toggle}
        >
            <h5 className="font-medium text-[14px] lg:text-[1vw]">{title}</h5>
            {open ? <Minus /> : <Plus className="rotate-90" />}
        </div>
        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${open ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="mt-2">{children}</div>
        </div>
    </div>
);

const SideBar = ({
    categories,
    subcategories,
    selectedCategory,
    selectedSubcategory,
    search,
    setSearch,
    setSelectedCategory,
    setSelectedSubcategory,
    openSections,
    toggleSection,
}) => (
    <div className="flex flex-col gap-7 max-h-[85vh] overflow-auto sticky top-[20%] p-7 lg:p-0">
        <div className="relative">
            <input
                type="search"
                placeholder="Search services"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-zinc-200 rounded-full w-full px-4 py-2"
            />
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        <Section title="Categories" open={openSections.category} toggle={() => toggleSection("category")}>
            <ul className="space-y-2">
                <li
                    onClick={() => setSelectedCategory(null)}
                    className={`cursor-pointer px-4 py-2 rounded-full ${!selectedCategory ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
                >
                    All
                </li>
                {categories.map((cat) => (
                    <li
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`cursor-pointer px-4 py-2 rounded-full ${selectedCategory === cat ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </Section>

        <Section title="Sub Categories" open={openSections.subcategory} toggle={() => toggleSection("subcategory")}>
            <ul className="space-y-2">
                <li
                    onClick={() => setSelectedSubcategory(null)}
                    className={`cursor-pointer px-4 py-2 rounded-full ${!selectedSubcategory ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
                >
                    All
                </li>
                {subcategories.map((sub) => (
                    <li
                        key={sub}
                        onClick={() => setSelectedSubcategory(sub)}
                        className={`cursor-pointer px-4 py-2 rounded-full ${selectedSubcategory === sub ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
                    >
                        {sub}
                    </li>
                ))}
            </ul>
        </Section>
    </div>
);

// Main Component
export default function OurServices() {
    const { data, loading } = useSelector((state) => state.service);
    const services = data?.services || [];

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const [openSections, setOpenSections] = useState({ category: true, subcategory: false });

    const sectionRef = useRef(null);

    const toggleSection = (key) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

    const categories = useMemo(() => [...new Set(services.map((s) => s.category?.name).filter(Boolean))], [services]);
    const subcategories = useMemo(() => [...new Set(services.map((s) => s.subcategory?.name).filter(Boolean))], [services]);

    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const matchSearch = service.heading.toLowerCase().includes(search.toLowerCase());
            const matchCategory = !selectedCategory || service.category?.name === selectedCategory;
            const matchSubcategory = !selectedSubcategory || service.subcategory?.name === selectedSubcategory;
            return matchSearch && matchCategory && matchSubcategory;
        });
    }, [services, search, selectedCategory, selectedSubcategory]);

    const showSkeleton = loading || !services.length;

    // Smooth scroll to top on filter/search change
    // useEffect(() => {
    //     if (sectionRef.current) {
    //         sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // }, [search, selectedCategory, selectedSubcategory]);

    return (
        <section ref={sectionRef} className="wrapper py-10 flex gap-[2vw]">
            {/* Desktop Sidebar */}
            <aside className="w-[20%] hidden lg:block">
                {showSkeleton ? (
                    <SidebarSkeleton />
                ) : (
                    <SideBar
                        categories={categories}
                        subcategories={subcategories}
                        search={search}
                        setSearch={setSearch}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        setSelectedSubcategory={setSelectedSubcategory}
                        openSections={openSections}
                        toggleSection={toggleSection}
                    />
                )}
            </aside>

            {/* Content */}
            <div className="w-full lg:w-[80%]">
                {/* Mobile filter */}
                <div className="flex justify-between lg:hidden mb-4">
                    <span>All Services</span>
                    <button onClick={() => setIsCanvasOpen(true)} className="flex items-center gap-2 px-3 py-1 border rounded-full">
                        <Sliders className="w-5 h-5" />
                        Filters
                    </button>
                </div>

                {showSkeleton
                    ? Array.from({ length: 4 }).map((_, i) => <ServiceCardSkeleton key={i} reverse={i % 2 !== 0} />)
                    : filteredServices.map((service, index) => (
                        <div
                            key={service.id}
                            className={`bg-[#F6F6F6] rounded-2xl p-5 lg:p-[2vw] mb-10 flex flex-col lg:flex-row gap-6 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="relative h-[220px] lg:h-[18vw] w-full">
                                <Image src={service.image} fill className="object-cover rounded-2xl" alt={service.heading} />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <h6 className="mb-4">{service.heading}</h6>
                                    <p>{service.description}</p>
                                </div>
                                <Link href="/booking" className="mt-6 flex justify-between items-center">
                                    <img src="/svg/emergency-kit.svg" alt="" />
                                    <Button text="Book Now" />
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Mobile Canvas */}
            <CanvasDrawer open={isCanvasOpen} onClose={() => setIsCanvasOpen(false)}>
                {showSkeleton ? (
                    <SidebarSkeleton />
                ) : (
                    <SideBar
                        categories={categories}
                        subcategories={subcategories}
                        search={search}
                        setSearch={setSearch}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        setSelectedSubcategory={setSelectedSubcategory}
                        openSections={openSections}
                        toggleSection={toggleSection}
                    />
                )}
            </CanvasDrawer>
        </section>
    );
}
