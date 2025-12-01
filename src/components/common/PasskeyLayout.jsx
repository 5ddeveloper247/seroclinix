"use client";

import { useState, useEffect } from "react";

export default function PasskeyLayout({ children }) {
    const [isVerified, setIsVerified] = useState(false);
    const [input, setInput] = useState("");

    const PASSKEY = "12345"; // change your passkey

    useEffect(() => {
        const saved = localStorage.getItem("verified");
        if (saved === "true") {
            setIsVerified(true);
        }
    }, []);

    const handleSubmit = () => {
        if (input === PASSKEY) {
            localStorage.setItem("verified", "true");
            setIsVerified(true);
        } else {
            alert("Wrong passkey!");
        }
    };

    if (!isVerified) {
        return (
            <div className="flex items-center justify-center h-screen bg-black text-white">
                <div className="p-6 bg-neutral-900 rounded-xl w-80 text-center">
                    <h2 className="text-lg font-semibold mb-4">Enter Passkey</h2>

                    <input
                        type="password"
                        className="w-full p-2 rounded bg-neutral-800 outline-none mb-3"
                        placeholder="Passkey"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-white text-black py-2 rounded font-medium"
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
