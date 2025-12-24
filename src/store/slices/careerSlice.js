import { createSlice } from "@reduxjs/toolkit";
import { fetchCareerPage } from "../thunk/careerThunk";

const careerSlice = createSlice({
    name: "career",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCareerPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCareerPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
            })
            .addCase(fetchCareerPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default careerSlice.reducer;
