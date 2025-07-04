import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// 임시로 일단 피팅적용
const BASE_URL = "https://ptip.p-e.kr";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
