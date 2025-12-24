import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogPage } from "../thunk/blogThunk";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchBlogPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default blogSlice.reducer;
