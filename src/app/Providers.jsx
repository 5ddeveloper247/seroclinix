"use client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@/store";
import GlobalLoader from "@/components/common/GlobalLoader";

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            {children}
            <GlobalLoader />
            <ToastContainer position="top-right" newestOnTop />
        </Provider>
    );
}
