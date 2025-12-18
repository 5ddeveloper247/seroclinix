import { createSlice } from "@reduxjs/toolkit";
import { fetchHomePage } from "../thunk/homeThunk";

const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomePage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomePage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchHomePage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default homeSlice.reducer;
