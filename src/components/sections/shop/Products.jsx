"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/data";
import CanvasDrawer from "@/components/common/CanvasDrawer";
import Sidebar from "./SideBar"; // Import the sidebar
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    // Detect screen width to switch itemsPerPage
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 1024 ? 4 : 12);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    // Get current page products
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section>
            <div className="wrapper py-10 lg:py-5vw flex gap-7">

                <div className="hidden lg:block w-[25%]">
                    <Sidebar />
                </div>

                {/* Products & Mobile filter button */}
                <div className="w-full lg:w-[75%]">
                    <div className="flex items-center justify-between pt-2">
                        <span>All {products.length} Products showing</span>

                        <button
                            className="lg:hidden flex items-center gap-2 bg-footer text-white px-4 py-2 rounded-full"
                            onClick={() => setIsCanvasOpen(true)}
                        >
                            <img src="/svg/filter.svg" alt="Filter" className="w-5 h-5" />
                            Filter
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2vw] mt-10">
                        {currentProducts.map((product, i) => (
                            <Link href="/productDetail">
                                <div key={i}>
                                    <div className="relative h-80 lg:h-[23vw] bg-[#F6F6F6] w-full rounded-2xl lg:rounded-[1vw] border border-[#1919191A]">
                                        <Image src={product.img} fill className="object-fill rounded-2xl lg:rounded-[1vw]" alt={product.name} />
                                        <span className="py-2 px-4 rounded-full bg-footer absolute top-[1vw] right-[1vw] text-white">Hot Sale</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 mt-4">
                                        <div className="flex items-center gap-1">
                                            <img src="/svg/star.svg" alt="" />
                                            <img src="/svg/star.svg" alt="" />
                                            <img src="/svg/star.svg" alt="" />
                                            <img src="/svg/star.svg" alt="" />
                                        </div>
                                        <h6 className="mb-0! leading-none">{product.name}</h6>
                                        <span>{product.price}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center gap-2 justify-start mt-10">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`h-3 w-3 h-[2vw] w-[2vw] flex items-center justify-center rounded-full border ${currentPage === i + 1 ? "bg-primary text-white border-primary" : "bg-white text-primary border-none"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="text-primary"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Canvas */}
                <CanvasDrawer
                    open={isCanvasOpen}
                    onClose={() => setIsCanvasOpen(false)}
                    header={
                        <div className="flex justify-between items-center">
                            <h4>Filters</h4>
                            <button onClick={() => setIsCanvasOpen(false)}>X</button>
                        </div>
                    }
                >
                    <Sidebar />
                </CanvasDrawer>

            </div>
        </section>
    );
}
