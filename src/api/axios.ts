import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const Axios = axios.create({
  baseURL,
});

const HttpClient = {
  get: async <T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return Axios.get(url, config);
  },
};

export default HttpClient;
