"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import { Search, X, Sliders } from "lucide-react";
import SelectField from "@/components/common/SelectField";
import { certifiedVetData } from "@/data/data.js";

export default function Filters() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedValues, setSelectedValues] = useState({});
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);

    const handleToggle = (name) => {
        setOpenDropdown((prev) => (prev === name ? null : name));
    };

    const handleSelect = (name, value) => {
        setSelectedValues((prev) => ({ ...prev, [name]: value }));
        setOpenDropdown(null);
    };

    const FilterForm = () => (
        <form className="bg-[#F6F6F6] rounded-[1vw] p-5 lg:p-[1.5vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[1vw] items-end">
            {/* Vet Name Input */}
            <div className="relative">
                <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Vet Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Melissa"
                    className="w-full border border-[#1919191A] bg-white py-2 px-4 rounded-full focus:border-primary focus:ring-primary/30 focus:outline-none transition"
                />
                <Search className="absolute size-4 lg:size-[1vw] bottom-[2.5vw] lg:bottom-[.9vw] right-2 lg:right-[1vw] text-[#19191999]" />
            </div>

            {/* Custom dropdowns */}
            {certifiedVetData.map((field) => (
                <SelectField
                    key={field.name}
                    label={field.label}
                    options={field.options}
                    defaultText={field.defaultText}
                    isOpen={openDropdown === field.name}
                    onToggle={() => handleToggle(field.name)}
                    selected={selectedValues[field.name]}
                    onSelect={(value) => handleSelect(field.name, value)}
                />
            ))}

            <Button
                text="Apply Filters"
                className="w-full py-2 border border-primary justify-center bg-white text-primary! font-medium hover:bg-primary hover:text-white! transition"
            />
        </form>
    );

    return (
        <section className="wrapper pt-10 lg:pt-[4vw]">
            <div className="flex justify-between items-center mb-5 lg:mb-8">
                <h3 className="mb-0 hidden lg:block">Filter By</h3>

                {/* Mobile filter button */}
                <button
                    type="button"
                    onClick={() => setIsCanvasOpen(true)}
                    className="lg:hidden flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full"
                >
                    <Sliders className="w-5 h-5" />
                    Filters
                </button>
            </div>

            {/* Desktop sidebar */}
            <div className="hidden lg:block">
                <FilterForm />
            </div>

            {/* Mobile canvas */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white shadow-lg z-50 transform transition-transform duration-600 ${isCanvasOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-8 border-b border-gray-200">
                    <h4>Filters</h4>
                    <button onClick={() => setIsCanvasOpen(false)}>
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <div className="">
                    <FilterForm />
                </div>
            </div>

            {/* Mobile overlay */}
            {isCanvasOpen && (
                <div
                    onClick={() => setIsCanvasOpen(false)}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40"
                ></div>
            )}
        </section>
    );
}
