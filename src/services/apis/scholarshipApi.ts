import { removeUndefined } from "@/utils/removeUndefined";
import axiosInstance from "./axiosInstance";

export const getScholarships = async (id?: number) => {
  const url = id ? `/api/award?id=${id}` : `/api/award`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getSearchScholarships = async (
  name?: string,
  point?: number,
  department?: string,
) => {
  const params = removeUndefined({ name, point, department });

  const response = await axiosInstance.get("/api/award/search", { params });
  return response.data;
};

export const getFilterScholarships = async (consonant: string) => {
  const response = await axiosInstance.get(
    `/api/award/filter?consonant=${consonant}`,
  );
  return response.data;
};

export const getOrderScholarships = async (
  query?: string,
  page?: number,
  order?: string,
) => {
  const params = removeUndefined({ query, page, order });
  const response = await axiosInstance.get("api/award/searchP", { params });
  return response.data;
};
