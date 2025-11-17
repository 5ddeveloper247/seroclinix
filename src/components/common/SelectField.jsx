"use client";

import { ChevronDown } from "lucide-react";

export default function SelectField({ label, options = [], defaultText, isOpen, onToggle, selected, onSelect }) {
    
    return (
        <div className="relative w-full">
            <label className="block mb-2 font-medium text-gray-700">{label}</label>

            {/* Dropdown Trigger */}
            <button
                type="button"
                onClick={onToggle}
                className={`w-full bg-white border border-[#1919191A] rounded-full px-4 py-2 text-left flex justify-between items-center
                    focus:outline-none focus:ring-primary/30 focus:border-primary transition`}
            >
                <span className={`text-gray-700 ${!selected ? "text-gray-400" : ""}`}>
                    {selected || defaultText || `Select ${label}`}
                </span>
                <ChevronDown className="text-gray-400" />
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <ul
                    className="absolute z-50 mt-1 w-full bg-white border border-[#1919191A] rounded-xl shadow-lg max-h-60 overflow-auto
                     animate-fadeIn transition"
                >
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            className="px-4 py-2 hover:bg-primary/10 cursor-pointer transition-colors"
                            onClick={() => onSelect(opt.label)}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
