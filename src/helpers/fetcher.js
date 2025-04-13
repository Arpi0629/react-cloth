import { axiosInstance } from "../services/instance";

export const fetcher = async (url) => (await axiosInstance.get(url)).data;