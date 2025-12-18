import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/lib/axios";
import { toast } from "react-toastify";

export const fetchHomePage = createAsyncThunk(
    "home/fetchHomePage",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                "get",
                "/api/v1/sero-clinix/pages/home"
            );

            return data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch home page";

            toast.error(message);
            return rejectWithValue(message);
        }
    }
);
