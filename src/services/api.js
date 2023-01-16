import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = null;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
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
    const originalConfig = err.config;

    if (err.response && err.response.data.status_code)
      console.log(
        "Error: ",
        err.response.data ? err.response.data.message : "Something went wrong"
      );
    else console.log("Terjadi kesalahan sistem");

    if (
      originalConfig.url !== "/token" &&
      err.response.data.status_code == 401
    ) {
      // store.dispatch("auth/LOGOUT");
    }
    return Promise.reject(err);
  }
);

export default instance;
