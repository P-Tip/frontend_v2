import { IScholarship } from "@/types/scholarship";
import ReactGA from "react-ga4";
export const calculateTotalPoints = (data: IScholarship[]) => {
  return data.reduce((sum, item) => sum + Number(item.max_point), 0);
};

type TDate = {
  label: string;
  color: "almost" | "nearly" | "distant" | "finished";
  date?: string;
};

export const getFormatDate = (date: string): TDate => {
  if (!date) {
    return { label: "미정", color: "distant" };
  }

  const currentDate = new Date();
  const endDate = new Date(date);

  currentDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  const differenceDate =
    (endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);
  const formatDate = date.split("-").slice(1).join("/");

  if (differenceDate < 0) {
    return { label: "종료", color: "finished", date: formatDate };
  } else if (differenceDate <= 7) {
    return { label: "마감임박", color: "almost", date: formatDate };
  } else if (differenceDate <= 14) {
    return {
      label: `${differenceDate}일 전`,
      color: "nearly",
      date: formatDate,
    };
  } else {
    return {
      label: `${differenceDate}일 전`,
      color: "distant",
      date: formatDate,
    };
  }
};

export const clickEvent = (category: string, action: string) => {
  ReactGA.event({
    category, //각각 다른 하위 name
    action, //공통(상위 name)//같은 거로 묶을때 동일하게 작성
  });
};
