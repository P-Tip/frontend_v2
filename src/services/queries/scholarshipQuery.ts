import { useQuery } from "@tanstack/react-query";
import { getFilterScholarships, getScholarships } from "../apis/scholarshipApi";
import { IDepartment, IScholarship } from "@/types/scholarship";

export const useFilterScholarships = (selectConsonant: string) => {
  return useQuery<IDepartment[]>({
    queryKey: ["departments", selectConsonant],
    queryFn: () => getFilterScholarships(selectConsonant),
  });
};

export const useScholarships = () => {
  return useQuery<IScholarship[]>({
    queryKey: ["scholarships"],
    queryFn: () => getScholarships(),
  });
};
