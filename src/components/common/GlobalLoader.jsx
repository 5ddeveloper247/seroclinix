"use client";

import { useSelector } from "react-redux";

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    backdropFilter: "blur(2px)",
};

const spinnerStyle = {
    width: "3rem",
    height: "3rem",
    border: "4px solid #cbd5e1",
    borderTopColor: "#4f46e5",
    borderRadius: "9999px",
    animation: "spin 1s linear infinite",
};

const GlobalLoader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);

    if (!isLoading) {
        return null;
    }

    return (
        <div style={overlayStyle}>
            <div style={spinnerStyle} aria-label="Loading" />
        </div>
    );
};

export default GlobalLoader;
