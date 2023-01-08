import axios from "axios";

const configuration = {
  baseURL: "https://example.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": [
      "Origin",
      "Accept",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
  },
};

var axiosInstance = axios.create(configuration);

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("config === >", config);
    const oAuthTokan = localStorage.getItem("token") || null;
    let newHeaders = config.headers;
    if (oAuthTokan) {
      newHeaders = Object.assign({}, newHeaders, {
        Authorization: `Bearer ${oAuthTokan}`,
      });
    }
    return Object.assign({}, config, { headers: newHeaders });
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
