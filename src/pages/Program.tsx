import { useState } from "react";
import {
  HiAcademicCap,
  HiBuildingOffice2,
  HiCalendarDays,
  HiHeart,
  HiOutlineHeart,
  HiChevronDown,
} from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";

const Program = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [likedPrograms, setLikedPrograms] = useState<number[]>([]);

  // 카테고리 목록
  const categories = [
    "전체",
    "학술",
    "취업",
    "문화",
    "봉사",
    "국제교류",
    "창업",
  ];

  // 더미 프로그램 데이터
  const programs = [
    {
      id: 1,
      title: "캠퍼스 축제 자원봉사",
      description: "봄 축제 진행을 위한 자원봉사를 모집합니다",
      category: "문화",
      status: "마감",
      applyPeriod: "~ 6월 5일",
      progressPeriod: "6월 15일 ~ 6월 18일",
      method: "오프라인",
      location: "대학 캠퍼스 전역",
      benefits: ["봉사활동 인증", "활동비 지급", "추석 특강 패키지"],
      additionalInfo: ["학점 인정 가능", "우수 참여 기능"],
    },
    {
      id: 2,
      title: "학부생 연구 프로젝트",
      description: "교수님과 함께하는 학부생 연구 프로젝트 참가자 모집",
      category: "학술",
      status: "마감",
      applyPeriod: "~ 6월 10일",
      progressPeriod: "6월 15일 ~ 8월 31일",
      method: "오프라인",
      location: "중앙도서관 세미나실",
      benefits: ["연구 성과 지원", "학회 발표 기회", "우수 연구 시상"],
      additionalInfo: ["졸업 요건 충족", "대학원 진학 가산점"],
    },
  ];

  const filteredPrograms =
    activeCategory === "전체"
      ? programs
      : programs.filter((program) => program.category === activeCategory);

  const toggleLike = (programId: number) => {
    setLikedPrograms((prev) =>
      prev.includes(programId)
        ? prev.filter((id) => id !== programId)
        : [...prev, programId],
    );
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "모집중":
        return "bg-tag-green-bg text-tag-green-text";
      case "마감":
        return "bg-tag-red-bg text-tag-red-text";
      case "진행중":
        return "bg-yellow-100 text-yellow-600";
      case "예정":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "학술":
        return "bg-blue-50 text-blue-600";
      case "문화":
        return "bg-purple-50 text-purple-600";
      case "취업":
        return "bg-green-50 text-green-600";
      case "봉사":
        return "bg-orange-50 text-orange-600";
      case "국제교류":
        return "bg-indigo-50 text-indigo-600";
      case "창업":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-6 animate-fadeIn">
      {/* 헤더 섹션 */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-brand-text-primary mb-2">
          교내외 프로그램
        </h1>
        <p className="text-brand-text-secondary mb-6">
          다양한 교내외 프로그램을 탐색하고 참여하세요. 학업, 취업, 문화 활동 등
          다양한 경험을 쌓을 수 있습니다.
        </p>

        {/* 검색 및 필터 영역 */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* 검색바 */}
            <div className="flex-1 border border-gray-300 rounded-xl flex items-center px-1 py-0.5 focus-within:border-2 focus-within:border-brand-green focus-within:shadow-sm transition-all duration-300">
              <input
                type="text"
                placeholder="프로그램 검색"
                className="flex-1 border-none outline-none px-3 py-2 text-brand-text-primary placeholder:text-brand-text-secondary bg-white"
              />
              <button className="p-2 hover:bg-green-50 rounded-lg transition-colors duration-200">
                <IoSearchSharp className="text-brand-text-secondary hover:text-brand-green" />
              </button>
            </div>

            {/* 필터 드롭다운 */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-brand-text-primary hover:bg-gray-50 transition-colors duration-200">
                <span>필터</span>
                <HiChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-brand-text-primary hover:bg-gray-50 transition-colors duration-200">
                <span>마감임박순</span>
                <HiChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* 카테고리 태그 */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand-green text-white shadow-md"
                    : "bg-gray-100 text-brand-text-primary hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 프로그램 목록 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group"
          >
            {/* 상단: 상태/카테고리와 좋아요 */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryStyle(program.category)}`}
                >
                  {program.category}
                </span>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(program.status)}`}
                >
                  {program.status}
                </span>
              </div>
              <button
                onClick={() => toggleLike(program.id)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                {likedPrograms.includes(program.id) ? (
                  <HiHeart className="w-6 h-6 text-red-500" />
                ) : (
                  <HiOutlineHeart className="w-6 h-6 text-gray-400 hover:text-red-500" />
                )}
              </button>
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

            {/* 상세 정보 - 2x2 그리드 */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5 bg-gray-100 rounded-2xl p-4">
              <div>
                <span className="text-xs text-brand-text-secondary block mb-1">
                  신청 기간
                </span>
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.applyPeriod}
                </span>
              </div>
              <div>
                <span className="text-xs text-brand-text-secondary block mb-1">
                  진행 기간
                </span>
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.progressPeriod}
                </span>
              </div>
              <div>
                <span className="text-xs text-brand-text-secondary block mb-1">
                  참여 방식
                </span>
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.method}
                </span>
              </div>
              <div>
                <span className="text-xs text-brand-text-secondary block mb-1">
                  장소
                </span>
                <span className="text-sm text-brand-text-primary font-medium">
                  {program.location}
                </span>
              </div>
            </div>

            {/* 혜택 태그들 */}
            <div className="mb-5">
              <div className="flex flex-wrap gap-2 mb-2">
                {program.benefits.map((benefit, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-brand-green text-white text-xs font-medium rounded-md"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {program.additionalInfo.map((info, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-gray-100 text-brand-text-secondary text-xs font-medium rounded-md"
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>

            {/* 버튼들 */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
                상세 정보
              </button>
              <button className="flex-1 py-3 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-all duration-200 shadow-sm hover:shadow-md">
                신청하기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 빈 상태 */}
      {filteredPrograms.length === 0 && (
        <div className="bg-brand-surface rounded-3xl p-12 shadow-sm border border-gray-200 text-center animate-fadeIn">
          <div className="mb-4">
            <HiAcademicCap className="w-16 h-16 text-gray-300 mx-auto" />
          </div>
          <h3 className="text-xl font-bold text-brand-text-primary mb-2">
            해당 카테고리의 프로그램이 없습니다
          </h3>
          <p className="text-brand-text-secondary font-medium">
            다른 카테고리를 선택하거나 전체를 확인해보세요
          </p>
        </div>
      )}
    </div>
  );
};

export default Program;
