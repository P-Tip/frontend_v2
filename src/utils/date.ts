/**
 * 날짜 형식 변환
 * @param dateString 날짜 문자열
 * @returns 날짜 문자열
 * ex) 2025-05-30 -> 2025.05.30
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(".", "");
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
