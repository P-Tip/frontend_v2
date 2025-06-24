import { useState } from "react";
import {
  HiAcademicCap,
  HiBuildingOffice2,
  HiCalendarDays,
} from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

const Program = () => {
  const [activeTab, setActiveTab] = useState("교내");

  // 더미 프로그램 데이터
  const programs = {
    교내: [
      {
        id: 1,
        title: "창업동아리 운영 지원 프로그램",
        description:
          "창업에 관심 있는 학생들을 위한 동아리 운영 및 멘토링 프로그램",
        category: "창업",
        period: "2025.03 ~ 2025.12",
        status: "모집중",
        department: "창업지원센터",
      },
      {
        id: 2,
        title: "해외 교환학생 프로그램",
        description: "자매결연 대학과의 교환학생 프로그램 참가 기회 제공",
        category: "국제",
        period: "2025.08 ~ 2025.12",
        status: "예정",
        department: "국제교류원",
      },
      {
        id: 3,
        title: "AI 프로젝트 경진대회",
        description: "인공지능 분야 창의적 프로젝트 개발 및 발표 대회",
        category: "학술",
        period: "2025.06 ~ 2025.11",
        status: "진행중",
        department: "AI학과",
      },
    ],
    교외: [
      {
        id: 4,
        title: "삼성 청년 SW 아카데미",
        description: "삼성전자에서 주관하는 소프트웨어 개발자 양성 프로그램",
        category: "취업",
        period: "2025.07 ~ 2026.06",
        status: "모집예정",
        department: "외부기관",
      },
      {
        id: 5,
        title: "K-Digital Training 과정",
        description: "정부 지원 디지털 인재 양성을 위한 교육훈련 과정",
        category: "교육",
        period: "2025.06 ~ 2025.12",
        status: "모집중",
        department: "고용노동부",
      },
    ],
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "모집중":
        return "bg-tag-green-bg text-tag-green-text";
      case "진행중":
        return "bg-yellow-100 text-yellow-600";
      case "예정":
      case "모집예정":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-6 animate-fadeIn">
      {/* 헤더 섹션 */}
      <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border mb-6">
        <h1 className="text-2xl font-bold text-brand-text-primary mb-4">
          교내외 프로그램
        </h1>

        {/* 검색바 */}
        <div className="border border-brand-green rounded-xl flex items-center px-1 py-0.5 mb-6 focus-within:border-2 focus-within:border-brand-green-dark focus-within:shadow-sm transition-all duration-300">
          <input
            type="text"
            placeholder="프로그램을 검색해보세요..."
            className="flex-1 border-none outline-none px-3 py-2 text-brand-text-primary placeholder:text-brand-text-secondary"
          />
          <button className="p-2 hover:bg-green-50 rounded-lg transition-colors duration-200">
            <IoSearchSharp className="text-brand-text-secondary hover:text-brand-green" />
          </button>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex space-x-2">
          {["교내", "교외"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-brand-green text-white shadow-md"
                  : "bg-gray-100 text-brand-text-primary hover:bg-gray-200"
              }`}
            >
              {tab} 프로그램
            </button>
          ))}
        </div>
      </div>

      {/* 프로그램 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs[activeTab as keyof typeof programs].map((program) => (
          <div
            key={program.id}
            className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-all duration-300 group"
          >
            {/* 상단: 상태와 카테고리 */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(program.status)}`}
                >
                  {program.status}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                  {program.category}
                </span>
              </div>
            </div>

            {/* 제목과 설명 */}
            <div className="mb-5">
              <h3 className="text-xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-green transition-colors duration-300">
                {program.title}
              </h3>
              <p className="text-sm text-brand-text-secondary line-clamp-2 leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* 상세 정보 */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <HiBuildingOffice2 className="w-5 h-5 text-brand-text-secondary flex-shrink-0" />
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.department}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <HiCalendarDays className="w-5 h-5 text-brand-text-secondary flex-shrink-0" />
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.period}
                </span>
              </div>
            </div>

            {/* 버튼들 */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
                상세보기
              </button>
              <button className="flex-1 py-3 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-md">
                신청하기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 빈 상태 */}
      {programs[activeTab as keyof typeof programs].length === 0 && (
        <div className="bg-brand-surface rounded-3xl p-12 shadow-sm border border-brand-border text-center animate-fadeIn">
          <div className="mb-4">
            <HiAcademicCap className="w-16 h-16 text-gray-300 mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-brand-text-primary mb-2">
            {activeTab} 프로그램이 없습니다
          </h3>
          <p className="text-brand-text-secondary font-medium">
            곧 새로운 프로그램이 추가될 예정입니다
          </p>
        </div>
      )}
    </div>
  );
};

export default Program;
