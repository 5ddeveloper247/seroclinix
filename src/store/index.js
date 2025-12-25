import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./slices/homeSlice";
import aboutReducer from "./slices/aboutSlice";
import blogReducer from "./slices/blogSlice";
import serviceReducer from "./slices/serviceSlice";
import productsReducer from "./slices/shopSlice";
import detailReducer from "./slices/detailSlice";
import careerReducer from "./slices/careerSlice";
import contactReducer from "./slices/contactSlice";
import loaderReducer from "./slices/loaderSlice";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        about: aboutReducer,
        blog: blogReducer,
        service: serviceReducer,
        products: productsReducer,
        detail: detailReducer,
        career: careerReducer,
        contact: contactReducer,
        loader: loaderReducer,
    }
});
