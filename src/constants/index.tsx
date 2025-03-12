import { IoHomeOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export const NAV_LIST = [
  { path: "/", label: "홈", icon: <IoHomeOutline /> },
  { path: "/scholarship", label: "장학금", icon: <IoSchoolOutline /> },
  { path: "/mypage", label: "마이페이지", icon: <IoPersonOutline /> },
];

export const RESPONSIVE_BREAKPOINT = {
  desktop: 960,
};
