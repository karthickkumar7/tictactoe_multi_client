import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const registerApi = async (payload) => {
  return await api.post("/api/auth/register", payload);
};

export const loginApi = async (payload) => {
  return await api.post("/api/auth/login", payload);
};
