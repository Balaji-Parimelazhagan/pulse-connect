import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
