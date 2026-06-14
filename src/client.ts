import { ApiClient } from "@min/api-client";

const apiClient = new ApiClient({
    url: import.meta.env.MIN_API_URL,
});

export function initSocket() {
    const token = localStorage.getItem("token");
    if (token) apiClient.initSocket(token);
}

export default apiClient;
