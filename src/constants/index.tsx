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

export const SORT_LIST = [
  { label: "사전순", value: "sort_dictionary" },
  { label: "마감순", value: "sort_deadline" },
  { label: "낮은 포인트순", value: "sort_lowPoint" },
  { label: "높은 포인트순", value: "sort_highPoint" },
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
