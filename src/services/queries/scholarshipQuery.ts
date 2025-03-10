import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getFilterScholarships,
  getScholarships,
  getSearchScholarships,
} from "../apis/scholarshipApi";
import { IDepartment, IScholarship } from "@/types/scholarship";
import { toast } from "sonner";

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

export const useSearchScholarships = (
  onSuccess: (data: IScholarship[]) => void,
) => {
  return useMutation({
    mutationFn: ({
      name,
      point,
      department,
    }: {
      name: string;
      point: number;
      department: string;
    }) => getSearchScholarships(name, point, department),
    onSuccess,
    onError: (error) => {
      console.error(error);
      toast("검색 중 문제가 발생했습니다.");
    },
  });
};
