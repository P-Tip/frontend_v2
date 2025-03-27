import { IScholarship } from "@/types/scholarship";

export const calculateTotalPoints = (data: IScholarship[]) => {
  return data.reduce((sum, item) => sum + Number(item.max_point), 0);
};
