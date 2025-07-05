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
