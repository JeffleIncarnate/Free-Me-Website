import axios from "axios";

export const API_URL = import.meta.env.VITE_API;

export const STATUS_CODES = {
  OK: 200,
};

export const instance = axios.create({
  baseURL: API_URL,
});
