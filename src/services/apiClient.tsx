import axios from "axios";
import Router from "next/router";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NODE_ENV === 'development'
  ? process.env.NEXT_PUBLIC_GATEWAY_API_URL_DEV
  : process.env.NEXT_PUBLIC_GATEWAY_API_URL_PROD,
  headers: { 
    "Content-Type": "application/json",
    "X-Forwarded-Host": "http://127.0.0.1",
  },
});

// 🔹 Request Interceptor: Attach Authorization Token
api.interceptors.request.use(
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

api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    const status = error?.response?.status || error?.status;

    if (status === 401 || status === 402) {
      console.error("Session expired or payment required. Redirecting to logout...");
      if (typeof window !== "undefined") {
        window.location.href = "/auth/logout";
      }
    }

    return Promise.reject(error); // Ensure error propagates to caller
  }
);

export default api;
