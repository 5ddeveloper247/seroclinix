"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import { productDetailData } from "@/data/data";
import ProductTabs from "./ProductTabs";
import Button from "@/components/common/Button";

export default function ProductDetailPage({ product  }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setFade(false);
        const timeout = setTimeout(() => setFade(true), 50);
        return () => clearTimeout(timeout);
    }, [currentImageIndex]);

    const selectImage = (index) => setCurrentImageIndex(index);


    return (
        <section className="wrapper pt-10 lg:pt-[5vw]">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left side: Images */}
                <div className="lg:w-1/2 flex flex-col items-center">
                    <div className="relative w-full h-80 lg:h-[30vw] bg-[#F6F4F0] rounded-2xl overflow-hidden">
                        {/* Fade wrapper */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}>
                            <Image
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                fill
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex gap-2 mt-4">
                        {product.images.map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => selectImage(idx)}
                                className={`w-5 h-1 rounded-full cursor-pointer transition-all duration-300 ${currentImageIndex === idx ? "bg-primary scale-125" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>


                    {/* Thumbnails */}
                    <div className="grid grid-cols-7 gap-2 mt-4 overflow-x-auto">
                        {product.images.map((_, idx) => (
                            <span
                                key={idx}
                                onClick={() => selectImage(idx)}
                                className={`w-5 h-1 rounded-full cursor-pointer transition-all duration-300 ${currentImageIndex === idx ? "bg-primary scale-125" : "bg-gray-300"}`}
                            />
                        ))}

                    </div>
                </div>

                {/* Right side: Product Info */}
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <img src="/svg/star.svg" className="w-3 lg:w-[1vw]" alt="" />
                            <img src="/svg/star.svg" className="w-3 lg:w-[1vw]" alt="" />
                            <img src="/svg/star.svg" className="w-3 lg:w-[1vw]" alt="" />
                            <img src="/svg/star.svg" className="w-3 lg:w-[1vw]" alt="" />
                        </div>
                        <span className="opacity-40">(1 customer review)</span>
                    </div>
                    <h3 className="font-medium mb-4 lg:mb-0!">{product.name}</h3>
                    <div className="flex items-center gap-2">
                        <h6 className="line-through opacity-60">${product.pricing.base_price}</h6>
                        <h5 className="font-medium">${product.pricing.final_price}</h5>
                    </div>

                    <p className="text-gray-700">{product.description}</p>

                    <div className="flex items-center mt-4">
                        <div className="flex border border-[#19191933] w-1/2 rounded-full overflow-hidden w-max">
                            {/* Minus button */}
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="px-3 py-1 text-[13px] lg:text-[1vw] hover:bg-gray-300 text-lg font-bold"
                            >
                                -
                            </button>

                            {/* Input */}
                            <input type="number" value={quantity} onChange={e => setQuantity(Math.max(1, Number(e.target.value)))} />

                            {/* Plus button */}
                            <button
                                type="button"
                                onClick={() => setQuantity((q) => q + 1)}
                                className="px-3 py-1 text-[13px] lg:text-[1vw] hover:bg-gray-300 text-lg font-bold"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex items-center gap-3">
                        <Button
                            text="Add To Cart"
                            className="bg-transparent border border-primary text-primary! justify-center"
                        />

                        <Button
                            text="Buy Now"
                            className="justify-center"
                        />
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                        {/* <span className="text-gray-500"><strong>Brand:</strong> {product.brand}</span> */}
                        <span className="text-gray-500"><strong>Category:</strong> {product.category}</span>
                        <span className="text-gray-500"><strong>Tags:</strong> {product.tags.join(", ")}</span>
                    </div>

                    <div className="mt-5 flex items-start justify-between">
                        <div>
                            <h6 className="font-normal mb-3">Shipping</h6>
                            <p className="mb-0! text-[13px] lg:text-[.8vw]">USA: Free Shipping</p>
                            <p className="mb-0! text-[13px] lg:text-[.8vw]">Other countries: 10%</p>
                        </div>

                        <div>
                            <h6 className="font-normal mb-3">Payments</h6>
                            <img src="/svg/cards.svg" className=" w-20 lg:w-[15vw]" alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <ProductTabs
                description={product.description}
                reviews={product.reviews}
            />

        </section>
    );
}
