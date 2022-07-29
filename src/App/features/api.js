import axios from "axios";
axios.defaults.withCredentials = true;

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

export const loginApi = async (payload) => {
  return await API.post("/login", payload);
};
