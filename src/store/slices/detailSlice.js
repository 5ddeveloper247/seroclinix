import { createSlice } from "@reduxjs/toolkit";
import { fetchDetailPage } from "../thunk/detailThunk";

const detailSlice = createSlice({
    name: "detail",
    initialState: {
        data: null,        // normalized main product
        reviews: [],
        products: [],     // ✅ related / featured products
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetailPage.fulfilled, (state, action) => {
                state.loading = false;

                const payload = action.payload || {};
                const dataContainer = payload.data || payload;

                const product = dataContainer.product || dataContainer;
                const relatedProducts = dataContainer.products || []; // ✅ ADD THIS

                const reviewsRaw = dataContainer.reviews || [];
                const testimonials = dataContainer.testimonials || [];
                const faqs = dataContainer.faqs || payload.faqs || [];

                // normalize tags
                const tags =
                    product.tag_names ||
                    (product.tags ? product.tags.map((t) => t?.name || t) : []) ||
                    [];

                // normalize reviews
                const reviews = reviewsRaw.map((r) => ({
                    user: r.name || r.user || r.username || "",
                    rating: r.rating ?? r.rate ?? 0,
                    comment: r.comment || r.body || "",
                }));

                // ✅ MAIN PRODUCT (normalized)
                state.data = {
                    id: product.id,
                    name: product.name || product.title || "",
                    punchline: product.punchline || "",
                    description: product.description || "",
                    images: product.images || [],
                    price:
                        product.pricing?.final_price ??
                        product.pricing?.base_price ??
                        product.price ??
                        "",
                    pricing: product.pricing || {},
                    brand: product.brand || "",
                    category:
                        product.category_name ||
                        product.category?.name ||
                        product.category ||
                        "",
                    tags,
                    tag_ids: product.tag_ids || [],
                    reviews,
                    testimonials,
                    faqs,
                    raw: product,
                };

                // ✅ SAVE RELATED PRODUCTS
                state.products = relatedProducts;

                state.reviews = reviews;
            })
            .addCase(fetchDetailPage.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || action.error?.message || "Failed to load";
            });
    },
});

export default detailSlice.reducer;
