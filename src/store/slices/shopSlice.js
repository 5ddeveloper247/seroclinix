import { createSlice } from "@reduxjs/toolkit";
import { fetchShopPage } from "../thunk/shopThunk";

const shopSlice = createSlice({
    name: "products",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchShopPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchShopPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default shopSlice.reducer;
