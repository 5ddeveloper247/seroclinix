"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import { Star, ChevronRight } from "lucide-react";
import { vetsData } from "@/data/data";
import Link from "next/link";

export default function VetsCard() {
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(vetsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentVets = vetsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageClick = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 500, behavior: "smooth" });
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo({ top: 500, behavior: "smooth" });
        }
    };

    return (
        <section className="wrapper py-5 lg:py-[4vw]">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="mb-0">{vetsData.length} Vets that match your needs</h3>

                <div className="hidden lg:flex items-center gap-2 text-sm sm:text-base text-[#191919]">
                    <span>Sort by:</span>
                    <select className="text-zinc-400 border border-gray-300 rounded-full px-3 py-1 focus:ring focus:ring-primary/30 focus:outline-none">
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
            </div>

            {/* Vet Cards */}
            {currentVets.map((vet, index) => (
                <div
                    key={index}
                    className="border border-[#19191926] p-4 lg:p-[2vw] rounded-2xl lg:rounded-[1vw] mt-10 lg:mt-[2vw] bg-white hover:shadow-md transition-all duration-300"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 lg:gap-[1vw]">
                            <div>
                                <img
                                    src={vet.image}
                                    alt={vet.name}
                                    className="h-20 w-20 lg:h-[6vw] lg:w-[6vw] rounded-full object-cover"
                                />
                            </div>

                            <div>
                                <span className="flex items-center gap-[.4vw] text-sm text-[#191919B2]">
                                    <Star className="size-3 lg:size-[1vw] text-[#FDB022] fill-[#FDB022]" />
                                    {vet.rating} ({vet.reviews}) - {vet.country}
                                </span>

                                <h5 className="font-medium my-2">{vet.name}</h5>

                                <div className="flex items-center gap-1 lg:gap-[.5vw] flex-wrap">
                                    {vet.badges?.map((badge, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 lg:py-[.4vw] lg:px-[1.4vw] text-[12px] lg:text-[.7vw] text-white rounded-md"
                                            style={{ backgroundColor: badge.color }}
                                        >
                                            {badge.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col gap-[.6vw]">
                            <Button text="Book Appointment" className="w-full justify-center" />
                            <Link href="/vetProfile">
                                <Button
                                    text="View Profile"
                                    className="w-full justify-center bg-transparent text-primary! border border-primary"
                                />
                            </Link>
                        </div>
                    </div>

                    <h6 className="my-5 lg:my-[1vw] text-[#191919]">
                        ${vet.rate}
                        <span className="opacity-40"> / hour</span>
                    </h6>

                    <div className="flex flex-wrap items-center gap-1 lg:gap-4 text-[#191919B2]">
                        <p className="flex items-center gap-1 opacity-100 font-medium text-[13px]">
                            <img src="/svg/client.svg" className="w-4 lg:w-[1vw]" alt="" />
                            {vet.activeClients} active clients - {vet.totalClients} total clients worked with
                        </p>

                        <p className="flex items-center gap-1 opacity-100 font-medium text-[13px]">
                            <img src="/svg/translate.svg" className="w-4 lg:w-[1vw]" alt="" />
                            {vet.languages.join(", ")}
                        </p>
                    </div>

                    <p className="text-[#191919B2] leading-relaxed opacity-100 mt-4 lg:mt-0">
                        {vet.description}
                    </p>

                    <div className="lg:hidden space-y-4 mt-4">
                        <Button text="Book Appointment" className="w-full justify-center" />
                        <Link href="/vetProfile">
                            <Button
                                text="View Profile"
                                className="w-full justify-center bg-transparent text-primary! border border-primary"
                            />
                        </Link>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-between items-center gap-3 mt-[2vw]">
                <div className="flex items-center gap-3">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageClick(i + 1)}
                            className={`w-9 h-9 flex items-center justify-center rounded-full font-medium transition-all duration-200
                            ${currentPage === i + 1
                                    ? "bg-primary text-white"
                                    : "bg-transparent text-primary hover:bg-primary/10"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`w-9 h-9 flex items-center justify-center rounded-full text-primary transition-all duration-200 hover:bg-primary/10 
                        ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        <ChevronRight className="size-4" />
                    </button>
                </div>

                <span className="text-[#19191999] font-medium">
                    Showing
                    <span className="text-black"> 1 to 4 </span>
                    of
                    <span className="text-black"> 43</span>
                </span>
            </div>
        </section>
    );
}
