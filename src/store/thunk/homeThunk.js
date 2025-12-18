import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomePage = createAsyncThunk(
    "home/fetchHomePage",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/v1/sero-clinix/pages/home"
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "API Error");
        }
    }
);
