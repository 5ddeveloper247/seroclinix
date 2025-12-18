import { apiRequest } from "@/lib/axios";

export const getHomePageData = async () =>
    apiRequest("get", "/api/v1/sero-clinix/pages/home");
