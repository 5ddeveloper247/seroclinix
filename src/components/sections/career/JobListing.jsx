"use client";
import { useState } from "react";
import Button from "@/components/common/Button";
import FilterBar from "@/components/sections/career/FilterBar";
import { jobsData } from "@/data/data";
import { XIcon, Sliders } from "lucide-react";
import CanvasDrawer from "@/components/common/CanvasDrawer";

export default function JobListings() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // mobile canvas toggle
    const jobsPerPage = 5;

    const totalPages = Math.ceil(jobsData.length / jobsPerPage);
    const startIndex = (currentPage - 1) * jobsPerPage;
    const currentJobs = jobsData.slice(startIndex, startIndex + jobsPerPage);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    return (
        <section className="wrapper py-10 lg:py-[6vw] flex flex-col lg:flex-row lg:gap-[4vw] relative">

            {/* === Sidebar for Desktop === */}
            <div className="hidden lg:block w-full lg:w-[25%] sticky top-0 left-0">
                <FilterBar />
            </div>

            {/* === Job Cards === */}
            <div className="w-full lg:w-[75%] flex flex-col gap-6">
                {/* Header */}
                <div className="flex justify-between items-center gap-2 sm:gap-0">
                    <div className="flex items-center gap-2 text-sm sm:text-base text-[#191919]">
                        <span>Sort by:</span>
                        <select className="text-zinc-400 border border-gray-300 rounded-full px-3 py-1 focus:ring focus:ring-primary/30 focus:outline-none">
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>

                    {/* === Filter Button for Mobile === */}
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="flex lg:hidden items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm"
                        >
                            <Sliders className="w-5 h-5" />
                            Filters
                        </button>
                </div>

                {/* Job Cards */}
                {currentJobs.map((job, i) => (
                    <article
                        key={i}
                        className="border border-[#19191926] rounded-xl p-4 sm:p-6 lg:p-[1.5vw] bg-white hover:shadow-md transition-shadow duration-300"
                    >
                        <span className="text-black opacity-70 text-sm sm:text-base">{job.time}</span>
                        <h5 className="font-normal my-2 sm:my-3 text-base sm:text-lg">{job.title}</h5>
                        <p className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{job.rate}</p>
                        <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                            {job.tags.map((tag, j) => (
                                <span
                                    key={j}
                                    className="py-1 px-2 sm:py-[.6vw] sm:px-[1vw] text-xs sm:text-[.7vw] bg-gray-100 text-zinc-500 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Button text="Apply" className="px-4 sm:px-[3vw] py-1 sm:py-2" />
                    </article>
                ))}

                {/* Pagination */}
                <div className="flex flex-wrap justify-between items-center gap-2 mt-4 sm:mt-6 w-full">
                    <div className="flex items-center gap-[.3vw]">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-[.9vw] transition rounded-full flex justify-center items-center ${currentPage === i + 1
                                    ? "bg-primary text-white"
                                    : "text-primary hover:bg-primary hover:text-white"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <p className="text-gray-500 mb-0!">
                        Showing {startIndex + 1}–{Math.min(startIndex + jobsPerPage, jobsData.length)} of {jobsData.length} jobs
                    </p>
                </div>
            </div>

            {/* === Filter Canvas (Mobile) using CanvasDrawer === */}
            <CanvasDrawer
                open={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                header={
                    <>
                        <h4 className="text-lg font-medium">Filters</h4>
                        <button onClick={() => setIsFilterOpen(false)}>
                            <XIcon className="w-6 h-6 text-gray-700" />
                        </button>
                    </>
                }
            >
                <FilterBar />
            </CanvasDrawer>

            {/* Overlay */}
            {isFilterOpen && (
                <div
                    onClick={() => setIsFilterOpen(false)}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40"
                ></div>
            )}
        </section>
    );
}
