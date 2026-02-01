

import axios from "axios";

const api = axios.create({
  baseURL: "https://69442b307dd335f4c35f8012.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
