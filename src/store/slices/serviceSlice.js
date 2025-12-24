import { createSlice } from "@reduxjs/toolkit";
import { fetchServicePage } from "../thunk/serviceThunk";

const serviceSlice = createSlice({
    name: "service",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServicePage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchServicePage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchServicePage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default serviceSlice.reducer;
