import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/lib/axios";
// import { toast } from "react-toastify";

export const fetchServicePage = createAsyncThunk(
    "service/fetchServicePage",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                "get",
                "/api/v1/sero-clinix/pages/services"
            );

            return data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch services page";

            // toast.error(message);
            return rejectWithValue(message);
        }
    }
);
