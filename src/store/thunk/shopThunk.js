import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/lib/axios";
import { toast } from "react-toastify";

export const fetchShopPage = createAsyncThunk(
    "shop/fetchShopPage",
    async (_, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                "get",
                "/api/v1/sero-clinix/pages/products"
            );

            return data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Failed to fetch products page";

            toast.error(message);
            return rejectWithValue(message);
        }
    }
);
