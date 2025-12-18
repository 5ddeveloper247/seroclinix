import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        activeRequests: 0,
        isLoading: false,
    },
    reducers: {
        startLoading: (state) => {
            state.activeRequests += 1;
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.activeRequests = Math.max(0, state.activeRequests - 1);
            state.isLoading = state.activeRequests > 0;
        },
        resetLoading: (state) => {
            state.activeRequests = 0;
            state.isLoading = false;
        },
    },
});

export const { startLoading, stopLoading, resetLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
