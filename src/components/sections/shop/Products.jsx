"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { useSelector } from "react-redux";
import { Skeleton } from "@heroui/react";

import CanvasDrawer from "@/components/common/CanvasDrawer";
import Sidebar from "./SideBar";

export default function ProductsPage() {
    const { data, loading } = useSelector((state) => state.products);

    // Always show skeleton if data is empty or loading
    const products = data?.products || [];
    const categories = data?.categories || [];
    const tags = data?.tags || [];

    const [isCanvasOpen, setIsCanvasOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    const [filters, setFilters] = useState({
        search: "",
        category: null,
        tag: null,
        price: { min: 0, max: 1000 },
    });

    /* Responsive pagination */
    useEffect(() => {
        const resize = () => setItemsPerPage(window.innerWidth < 1024 ? 4 : 12);
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    /* FILTER LOGIC */
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const price = Number(p.pricing?.final_price || 0);

            return (
                (!filters.search ||
                    p.name.toLowerCase().includes(filters.search.toLowerCase())) &&
                (!filters.category || p.category_id === filters.category) &&
                (!filters.tag || p.tag_ids?.includes(filters.tag)) &&
                price >= filters.price.min &&
                price <= filters.price.max
            );
        });
    }, [products, filters]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    // Array for skeletons
    const skeletonArray = Array.from({ length: itemsPerPage });

    return (
        <section>
            <div className="wrapper py-10 lg:py-5vw flex gap-7">
                <div className="hidden lg:block w-[20%]">
                    <Sidebar
                        categories={categories}
                        tags={tags}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </div>

                <div className="w-full lg:w-[75%]">
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-[#909090]">
                            All <span className="text-black">{products.length}</span> Products
                            showing
                        </span>

                        <button
                            className="lg:hidden flex items-center gap-2 bg-footer text-white px-4 py-2 rounded-full"
                            onClick={() => setIsCanvasOpen(true)}
                        >
                            <img src="/svg/filter.svg" alt="Filter" className="w-5 h-5" />
                            Filter
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2vw] mt-10">
                        {(loading || products.length === 0
                            ? skeletonArray.map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-[#F6F6F6] rounded-2xl p-5 lg:p-[2vw] w-full flex flex-col gap-4 animate-pulse"
                                >
                                    <Skeleton className="h-80 lg:h-[23vw] w-full rounded-2xl" />
                                    <Skeleton className="h-5 w-3/4 mx-auto rounded" />
                                    <Skeleton className="h-4 w-1/2 mx-auto rounded" />
                                    <Skeleton className="h-6 w-full rounded-full" />
                                </div>
                            ))
                            : currentProducts
                        ).map((product, i) =>
                            loading || !product.id ? (
                                <div
                                    key={i}
                                    className="bg-[#F6F6F6] rounded-2xl p-5 lg:p-[2vw] w-full flex flex-col gap-4 animate-pulse"
                                >
                                    <Skeleton className="h-80 lg:h-[17vw] w-full rounded-2xl" />
                                    <Skeleton className="h-5 w-3/4 mx-auto rounded" />
                                    <Skeleton className="h-4 w-1/2 mx-auto rounded" />
                                    <Skeleton className="h-6 w-full rounded-full" />
                                </div>
                            ) : (
                                <Link href={`/productDetail/${product.id}`} key={product.id}>
                                    <div>
                                        <div className="relative h-80 lg:h-[23vw] bg-[#F6F6F6] w-full rounded-2xl lg:rounded-[1vw] border border-[#1919191A]">
                                            <Image
                                                src={product.images?.[0]}
                                                fill
                                                className="object-contain rounded-2xl lg:rounded-[1vw]"
                                                alt={product.name}
                                            />
                                            <span className="py-2 px-4 rounded-full bg-primary absolute top-[1vw] right-[1vw] text-white">
                                                Hot Sale
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center gap-3 mt-4">
                                            <div className="flex items-center gap-1">
                                                <img src="/svg/star.svg" alt="" />
                                                <img src="/svg/star.svg" alt="" />
                                                <img src="/svg/star.svg" alt="" />
                                                <img src="/svg/star.svg" alt="" />
                                            </div>
                                            <h6 className="mb-0! leading-none">{product.name}</h6>
                                            <span>${product.pricing.final_price}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center gap-2 justify-start mt-10">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`h-3 w-3 lg:h-[2vw] lg:w-[2vw] flex items-center justify-center rounded-full border 
                                ${currentPage === i + 1
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white text-primary border-none"
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
                    <Sidebar
                        categories={categories}
                        tags={tags}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </CanvasDrawer>
            </div>
        </section>
    );
}
