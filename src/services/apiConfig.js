import axios from "axios";
import { useAuthStore } from "../stores/auth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth")).accessToken
      : null;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const { signout, loggedIn } = useAuthStore();

    const originalConfig = err.config;

    if (err.response && err.response.data.status_code)
      console.log(
        "Error: ",
        err.response.data ? err.response.data.message : "Something went wrong"
      );
    // else console.log("Terjadi kesalahan sistem");

    if (
      originalConfig.url !== "/api_cg/auth/signin" &&
      err.response &&
      err.response.data.status_code == 401
    ) {
      if (loggedIn) signout();
    }
    return Promise.reject(err);
  }
);

export default instance;
