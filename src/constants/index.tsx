import { IoHomeOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export const NAV_LIST = [
  { path: "/scholarship", label: "솔선수범", icon: <IoSchoolOutline /> },
  { path: "/mypage", label: "MY", icon: <IoPersonOutline /> },
];

export const RESPONSIVE_BREAKPOINT = {
  desktop: 960,
};

export const ORDER_LIST = [
  { label: "기본", value: "end_date" },
  { label: "낮은 포인트순", value: "point_asc" },
  { label: "높은 포인트순", value: "point_desc" },
];

export const CONSONANT = [
  "ㄱ",
  "ㄴ",
  "ㄷ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅅ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

export const SCHOLARSHIP_DATA = "scholarshipData";
