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
  const params: any = {};
  if (name) params.name = name;
  if (point) params.point = point;
  if (department) params.department = department;

  const response = await axiosInstance.get("/api/award/search", { params });
  return response.data;
};

export const getFilterScholarships = async (consonant: string) => {
  const response = await axiosInstance.get(
    `/api/award/filter?consonant=${consonant}`,
  );
  return response.data;
};
