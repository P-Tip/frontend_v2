import { IoHomeOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export const NAV_LIST = [
  { path: "/", label: "솔선수범", icon: <IoSchoolOutline /> },
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

// Dummy data arrays for UI structure
export const NOTICE_LIST = [
  {
    id: "1",
    title: "2025학년도 1학기 장학금 신청 안내",
    date: "2025-05-30",
    department: "AI 학과",
    summary:
      "2025학년도 1학기 장학금 신청 기간 및 자격 요건에 대한 상세 안내입니다.",
  },
  {
    id: "2",
    title: "하계 인턴십 프로그램 참가자 모집",
    date: "2025-05-28",
    department: "AI 학과",
    summary: "여름방학 기간 중 실시되는 인턴십 프로그램 참가자를 모집합니다.",
  },
  {
    id: "3",
    title: "2025학년도 2학기 국가장학금 신청 안내",
    date: "2025-05-25",
    department: "AI 학과",
    summary: "국가장학금 유형별 신청 자격 및 지원 금액에 대한 안내입니다.",
  },
];

export const SCHOLARSHIP_LIST = [
  {
    id: "sch1",
    title: "학생성장 공부한 장학금",
    description:
      "학업 성취도 향상을 위한 학생 성장 공부한 성장하면 위한 장학금 지원 프로그램",
    period: "2학기",
    amount: "50,000 ~ 100,000 원/월",
    deadline: "마감임박 (~6/10)",
    status: "urgent",
    summary:
      "이 장학금은 학업 성취도가 우수한 학생들을 대상으로 하며, 성적 향상을 위한 다양한 프로그램을 제공합니다.",
  },
  {
    id: "sch2",
    title: "취업박람회 현장 방문 보고서 작성",
    description: "취업박람회의 방문하고 방문 관련 보고서를 작성 후 제출",
    period: "1학기",
    amount: "50,000 원 (일시불)",
    deadline: "마감임박 (~6/15)",
    status: "urgent",
    summary:
      "취업박람회 참석 후 체험 보고서를 작성하여 제출하면 지원금을 받을 수 있는 프로그램입니다.",
  },
  {
    id: "sch3",
    title: "창업 지원 장학금",
    description: "창업 아이디어를 가진 학생들을 위한 지원 프로그램",
    period: "1학기",
    amount: "최대 200,000 원",
    deadline: "30일 전 (~7/5)",
    status: "normal",
    summary:
      "창업을 준비하는 학생들에게 초기 자금을 지원하고 멘토링을 제공하는 프로그램입니다.",
  },
];
