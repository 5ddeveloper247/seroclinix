import axios from "@/lib/axios";

export const getHomePageData = async () => {
    try {
        const response = await axios.get("/api/v1/sero-clinix/pages/home");
        return response.data;
    } catch (error) {
        console.error("Failed to fetch home page data:", error);
        return null;
    }
};
