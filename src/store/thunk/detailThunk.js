import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/lib/axios";
// import { toast } from "react-toastify";

export const fetchDetailPage = createAsyncThunk(
    "service/fetchDetailPage",
    async (productId, { rejectWithValue }) => { // receive productId as argument
        try {
            const data = await apiRequest(
                "get",
                `/api/v1/sero-clinix/products/${productId}` // inject productId dynamically
            );

            return data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch product detail page";

            // toast.error(message);
            return rejectWithValue(message);
        }
    }
);
