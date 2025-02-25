import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ptip.p-e.kr",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
