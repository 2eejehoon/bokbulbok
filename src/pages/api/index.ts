import axios from "axios";

const baseUrl = "";

const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
});
