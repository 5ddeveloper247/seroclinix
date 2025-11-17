import React from "react";

export default function CanvasDrawer({ open, onClose, children, header, width = "w-[80%] sm:w-[60%]", className = "" }) {
    return (
        <>
            <div
                className={`fixed top-0 right-0 h-full ${width} bg-white shadow-lg z-50 transform transition-transform duration-600 ${open ? "translate-x-0" : "translate-x-full"} ${className}`}
            >
                {header && (
                    <div className="flex justify-between items-center px-4 py-8 border-b border-gray-200">
                        {header}
                    </div>
                )}
                <div>{children}</div>
            </div>
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-[rgba(0,0,0,0.4)] z-40"
                ></div>
            )}
        </>
    );
}
