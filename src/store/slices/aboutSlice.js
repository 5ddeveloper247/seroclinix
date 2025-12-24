import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutPage } from "../thunk/aboutThunk";

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAboutPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAboutPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchAboutPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default aboutSlice.reducer;
