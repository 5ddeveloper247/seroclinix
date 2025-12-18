import axios from "axios";
import { store } from "@/store";
import { startLoading, stopLoading } from "@/store/slices/loaderSlice";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const apiRequest = async (method, endpoint, payload = {}, config = {}) => {
    const normalizedMethod = method.toLowerCase();
    const requestConfig = {
        method: normalizedMethod,
        url: endpoint,
        ...config,
    };

    if (["get", "delete"].includes(normalizedMethod)) {
        if (payload && Object.keys(payload).length) {
            requestConfig.params = payload;
        }
    } else {
        requestConfig.data = payload;
    }

    store.dispatch(startLoading());

    try {
        let attempt = 0;
        const maxAttempts = 2; // initial try + 1 retry

        while (attempt < maxAttempts) {
            try {
                const response = await axiosInstance(requestConfig);
                return response.data;
            } catch (error) {
                attempt += 1;
                if (attempt >= maxAttempts) {
                    throw error;
                }
            }
        }
    } finally {
        store.dispatch(stopLoading());
    }
};

export default axiosInstance;
