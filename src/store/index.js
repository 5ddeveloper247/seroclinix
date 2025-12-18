import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import loaderReducer from "./slices/loaderSlice";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        loader: loaderReducer,
    }
});
