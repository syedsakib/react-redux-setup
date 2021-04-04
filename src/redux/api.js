import axios from "axios";

export const baseUrl = "http://192.168.100.100:3000";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("x-access-token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  return instance;
};

export default fetchClient();
