import { createSlice } from "@reduxjs/toolkit";
import { fetchContactPage } from "../thunk/contactThunk";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContactPage.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchContactPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default contactSlice.reducer;
