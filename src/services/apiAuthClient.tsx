import axios from "axios";
import Router from "next/router";

const apiAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_API_URL || "https://auth.rentfms.com/api",
  headers: { 
    "Content-Type": "application/json",
    "X-Account-Type": "fms_company",
   },
});

// 🔹 Request Interceptor: Attach Authorization Token
apiAuth.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // const { token } = useAuthStore.getState(); // Zustand token management
      const token = document.cookie
        .split("; ")
        .find(row => row.startsWith("authToken="))
        ?.split("=")[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor: Handle 402 and Redirect to Logout
apiAuth.interceptors.response.use(
 
  (response) => response, // Pass successful responses
  (error) => {
    if (typeof window !== "undefined" && error.response?.status === 401) {
      console.error("Session expired or unauthorized. Redirecting to logout...");
      window.location.href = "/auth/login"; // ✅ Use window.location to redirect
    }
    return Promise.reject(error);
  }
);

export default apiAuth;
