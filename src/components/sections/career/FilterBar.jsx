"use client";
import Button from "@/components/common/Button";
import { jobsData } from "@/data/data";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";

export default function JobListings() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);
    const barRef = useRef(null);

    const maxValue = 1000;

    // Convert value to % of bar width
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
        location: true,
        jobType: false,
        experience: false,
        salary: false,
        category: false,
        tag: false,
    });

    const toggleSection = (key) =>
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <section className="sticky top-[4%] left-0">
            {/* === Sidebar Filters === */}
            <aside className="py-10 px-5 lg:py-0 lg:px-0">
                <h4>Filter By</h4>

                <div className="lg:bg-[#F6F6F6] rounded-[1vw] lg:p-[1.5vw] flex flex-col gap-7 lg:gap-[1.5vw] h-fit max-h-[85vh] overflow-auto mt-5" style={{ scrollbarWidth: "none" }}>
                    {/* Location */}
                    <Section title="Location" open={openSections.location} toggle={() => toggleSection("location")}>
                        <select className="w-full border border-gray-300 bg-white rounded-md focus:ring focus:ring-primary/30 focus:outline-none p-3 lg:py-[.6vw]">
                            <option>Washington DC</option>
                        </select>
                    </Section>

                    <hr className="opacity-20" />

                    {/* Job Type */}
                    <Section title="Job Type" open={openSections.jobType} toggle={() => toggleSection("jobType")}>
                        <ul className="space-y-1">
                            {["Fixed-Price", "Fulltime", "Part-time (20hr/week)", "Freelance"].map((type, i) => (
                                <li key={i}>
                                    <label className="flex items-center gap-2 text lg:text-[.8vw] text-[#191919]">
                                        <input type="checkbox" className="accent-primary border-1" />
                                        {type}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <hr className="opacity-20" />

                    {/* Experience */}
                    <Section title="Experience" open={openSections.experience} toggle={() => toggleSection("experience")}>
                        <ul className="space-y-1">
                            {["Fresher", "Intermediate", "No-Experience", "Internship", "Expert"].map((exp, i) => (
                                <li key={i}>
                                    <label className="flex items-center gap-2 text lg:text-[.8vw] text-[#191919]">
                                        <input type="checkbox" className="accent-primary border-1" />
                                        {exp}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <hr className="opacity-20" />

                    {/* Salary */}
                    <Section title="Salary" open={openSections.salary} toggle={() => toggleSection("salary")}>
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

                        {/* Progress Bar */}
                        <div ref={barRef} className="relative h-1 w-full bg-gray-200 rounded-full">
                            <div
                                className="absolute h-1 bg-primary rounded-full"
                                style={{
                                    left: `${valueToPercent(min)}%`,
                                    width: `${valueToPercent(max) - valueToPercent(min)}%`,
                                }}
                            ></div>

                            {/* Draggable Handles */}
                            <div
                                className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                                style={{ left: `${valueToPercent(min)}%` }}
                                onMouseDown={(e) => handleDrag(e, "min")}
                            ></div>

                            <div
                                className="absolute w-4 h-4 bg-primary rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                                style={{ left: `${valueToPercent(max)}%` }}
                                onMouseDown={(e) => handleDrag(e, "max")}
                            ></div>
                        </div>

                        <div className="flex gap-3 my-4 text-sm">
                            {["Weekly", "Monthly", "Hourly"].map((opt, i) => (
                                <label
                                    key={i}
                                    className="relative cursor-pointer rounded-full py-1 px-3 text-[12px] lg:text-[.8vw] bg-white text-gray-700 border border-gray-300 transition-all duration-200 
                                    has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary"
                                >
                                    <input
                                        type="radio"
                                        name="salary-type"
                                        value={opt}
                                        className="absolute opacity-0 pointer-events-none"
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </Section>

                    <hr className="opacity-20" />

                    {/* Category 1 */}
                    <Section title="Category" open={openSections.category} toggle={() => toggleSection("category")}>
                        <ul className="space-y-1">
                            {["Fresher", "Intermediate", "No-Experience", "Internship", "Expert"].map((exp, i) => (
                                <li key={i}>
                                    <label className="flex items-center gap-2 text lg:text-[.8vw] text-[#191919]">
                                        <input type="checkbox" className="accent-primary border-1" />
                                        {exp}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <hr className="opacity-20" />

                    {/* Category 2 */}
                    <Section title="Tag" open={openSections.tag} toggle={() => toggleSection("tag")}>
                        <ul className="space-y-1">
                            {["Fresher", "Intermediate", "No-Experience", "Internship", "Expert"].map((exp, i) => (
                                <li key={i}>
                                    <label className="flex items-center gap-2 text lg:text-[.8vw] text-[#191919]">
                                        <input type="checkbox" className="accent-primary border-1" />
                                        {exp}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </Section>

                    <div className="sticky bottom-0 left-0 bg-[#fff] lg:bg-[#F6F6F6] py-3 lg:pt-[1vw]">
                        <Button text="Apply Filters" className="justify-center py-3 lg:py-[1vw]! w-full" />
                    </div>
                </div>
            </aside>
        </section>
    );
}

const Section = ({ title, open, toggle, children }) => (
    <div>
        {/* Header */}
        <div
            className="flex justify-between items-center cursor-pointer select-none mb-2"
            onClick={toggle}
        >
            <h5 className="font-medium text-[14px] lg:text-[1vw]">{title}</h5>
            {open ? (
                <Minus className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw] p-[2px] lg:p-[.3vw] text-white bg-primary rounded-full transition-all duration-600 rotate-0" />
            ) : (
                <Plus className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw] p-[2px] lg:p-[.3vw] text-white bg-primary rounded-full transition-all duration-600 rotate-90" />
            )}
        </div>

        {/* Collapsible Content */}
        <div
            className={`transition-all duration-600 ease-in-out overflow-hidden transform
            ${open
                ? "max-h-[600px]"
                : "max-h-0"}
            `}
        >
            <div className="mt-2">{children}</div>
        </div>
    </div>
);

