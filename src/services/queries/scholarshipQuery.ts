import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  getFilterScholarships,
  getSearchPScholarships,
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

export const useOrderScholarships = (
  query: string,
  page: number,
  order: string,
) => {
  return useQuery({
    queryKey: ["orderScholarships", query, page, order],
    queryFn: () => getSearchPScholarships(query, page, order),
  });
};

export const useInfiniteScholarships = (query: string, order: string) => {
  return useInfiniteQuery({
    queryKey: ["orderScholarships", query, order],
    queryFn: ({ pageParam = 0 }) =>
      getSearchPScholarships(query, pageParam, order),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.last) {
        return allPages.length;
      }

      return undefined;
    },
  });
};
