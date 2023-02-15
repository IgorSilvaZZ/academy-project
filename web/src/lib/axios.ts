import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const geocodingApi = axios.create({
  baseURL: "https://geocode.maps.co",
});
