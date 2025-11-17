"use client";

import { useState } from "react";

export default function ProductTabs({ description, reviews }) {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="mt-10 w-full">
            {/* Tabs */}
            <div className="flex border-b border-gray-300">
                <button
                    className={`px-4 py-2 font-medium transition-colors ${activeTab === "description"
                            ? "border-b-2 border-primary text-primary"
                            : "text-gray-600 hover:text-primary"
                        }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`px-4 py-2 font-medium transition-colors ${activeTab === "reviews"
                            ? "border-b-2 border-primary text-primary"
                            : "text-gray-600 hover:text-primary"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews ({reviews.length})
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                {activeTab === "description" && (
                    <div className="text-gray-700">
                        <p className="opacity-80 font-light">{description || "No description available."}</p>
                    </div>
                )}
                {activeTab === "reviews" && (
                    <div className="space-y-4">
                        {reviews.length > 0 ? (
                            reviews.map((review, index) => (
                                <div key={index} className="border border-black/10 rounded-2xl lg:rounded-[1vw] p-5 lg:p-[2vw]">
                                    <div className="flex justify-between items-center mb-2">
                                        <h6 className="font-medium">{review.user}</h6>
                                        <span className="text-yellow-500 text-[16px] lg:text-[1.3vw]">
                                            {"★".repeat(review.rating)}
                                            {"☆".repeat(5 - review.rating)}
                                        </span>
                                    </div>
                                    <p className="text-gray-600">{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
