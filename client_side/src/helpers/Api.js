import axios from "axios";

export const Api = axios.create({
  baseURL: "https://h8-phase2-gc.vercel.app",
});