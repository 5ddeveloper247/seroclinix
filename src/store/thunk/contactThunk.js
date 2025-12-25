import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "@/lib/axios";
import { toast } from "react-toastify";

export const fetchContactPage = createAsyncThunk(
    "contact/fetchContactPage",
    async (formData, { rejectWithValue }) => {
        try {
            const data = await apiRequest(
                "post",
                "/api/v1/sero-clinix/inquiries",
                formData
            );

            toast.success("Message sent successfully!");
            return data;
        } catch (error) {
            const message =
                error.response?.data?.message ||
                error.message ||
                "Failed to send message";

            toast.error(message);
            return rejectWithValue(message);
        }
    }
);
