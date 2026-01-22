"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Plus, Minus, Search, Sliders, X } from "lucide-react";
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
        {[1, 2, 3].map((_, i) => (
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
  ages,
  selectedCategory,
  selectedSubcategory,
  selectedAge,
  search,
  setSearch,
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedAge,
  openSections,
  toggleSection,
  resetFilters,
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

    <Section
      title="Animals"
      open={openSections.category}
      toggle={() => toggleSection("category")}
    >
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

    <Section
      title="Breed"
      open={openSections.subcategory}
      toggle={() => toggleSection("subcategory")}
    >
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

    <Section
      title="Age"
      open={openSections.age}
      toggle={() => toggleSection("age")}
    >
      <ul className="space-y-2">
        <li
          onClick={() => setSelectedAge(null)}
          className={`cursor-pointer px-4 py-2 rounded-full ${!selectedAge ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
        >
          All
        </li>
        {ages.map((age) => (
          <li
            key={age}
            onClick={() => setSelectedAge(age)}
            className={`cursor-pointer px-4 py-2 rounded-full ${selectedAge === age ? "border border-footer text-footer" : "bg-[#F6F6F6]"}`}
          >
            {age}
          </li>
        ))}
      </ul>
    </Section>


    <Button text="Reset Filters"
    className="!text-[#00565F] border-2 !border-[#00565f] !text-[15px] bg-white flex justify-center items-center !py-3" />
  </div>
);

// Main Component
export default function OurServices() {
    const { data, loading } = useSelector((state) => state.service);
    const services = data?.services || [];

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [selectedAge, setSelectedAge] = useState(null);
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const [openSections, setOpenSections] = useState({
        category: true,
        subcategory: false,
        age: false
    });

    const sectionRef = useRef(null);

    const toggleSection = (key) => setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

    const resetFilters = () => {
        setSearch("");
        setSelectedCategory(null);
        setSelectedSubcategory(null);
        setSelectedAge(null);
    };

    const categories = useMemo(() => [...new Set(services.map((s) => s.category?.name).filter(Boolean))], [services]);
    const subcategories = useMemo(() => [...new Set(services.map((s) => s.subcategory?.name).filter(Boolean))], [services]);
    const ages = useMemo(() => [...new Set(services.map((s) => s.age?.name).filter(Boolean))], [services]);

    const filteredServices = useMemo(() => {
        return services.filter((service) => {
            const matchSearch = service.heading.toLowerCase().includes(search.toLowerCase());
            const matchCategory = !selectedCategory || service.category?.name === selectedCategory;
            const matchSubcategory = !selectedSubcategory || service.subcategory?.name === selectedSubcategory;
            const matchAge = !selectedAge || service.age?.name === selectedAge;
            return matchSearch && matchCategory && matchSubcategory && matchAge;
        });
    }, [services, search, selectedCategory, selectedSubcategory, selectedAge]);

    const showSkeleton = loading || !services.length;

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
                        ages={ages}
                        search={search}
                        setSearch={setSearch}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        setSelectedSubcategory={setSelectedSubcategory}
                        selectedAge={selectedAge}
                        setSelectedAge={setSelectedAge}
                        openSections={openSections}
                        toggleSection={toggleSection}
                        resetFilters={resetFilters}
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
                        ages={ages}
                        search={search}
                        setSearch={setSearch}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        setSelectedSubcategory={setSelectedSubcategory}
                        selectedAge={selectedAge}
                        setSelectedAge={setSelectedAge}
                        openSections={openSections}
                        toggleSection={toggleSection}
                        resetFilters={resetFilters}
                    />
                )}
            </CanvasDrawer>
        </section>
    );
}