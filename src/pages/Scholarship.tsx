import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Scholarship: React.FC = () => {
  // State management for various UI interactions
  const [showSummary, setShowSummary] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [isScholarshipExpanded, setIsScholarshipExpanded] = useState(false);
  const [isNoticeExpanded, setIsNoticeExpanded] = useState(false);
  const [favoriteScholarships, setFavoriteScholarships] = useState<{
    [key: string]: boolean;
  }>({});

  // Initialize favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteScholarships");
    if (savedFavorites) {
      setFavoriteScholarships(JSON.parse(savedFavorites));
    }
  }, []);

  // Handler functions
  const toggleFavorite = (id: string) => {
    setFavoriteScholarships((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("favoriteScholarships", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleSummary = (id: string) => {
    setShowSummary((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatDate = (dateString: string) => {
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

  // Dummy data arrays for UI structure
  const noticeList = [
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

  const scholarshipList = [
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

  const programList = [
    {
      id: "prog1",
      title: "창업동아리 운영 지원 프로그램",
      description:
        "창업에 관심 있는 학생들을 위한 동아리 운영 및 멘토링 프로그램",
      category: "창업",
      period: "2025.03 ~ 2025.12",
      status: "모집중",
      department: "창업지원센터",
    },
    {
      id: "prog2",
      title: "AI 프로젝트 경진대회",
      description: "인공지능 분야 창의적 프로젝트 개발 및 발표 대회",
      category: "학술",
      period: "2025.06 ~ 2025.11",
      status: "진행중",
      department: "AI학과",
    },
    {
      id: "prog3",
      title: "해외 교환학생 프로그램",
      description: "자매결연 대학과의 교환학생 프로그램 참가 기회 제공",
      category: "국제",
      period: "2025.08 ~ 2025.12",
      status: "예정",
      department: "국제교류원",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative">
      {/* 사이트 공지사항 배너 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-brand-text-primary font-medium">
                📢 [공지] 5월 업데이트: 새로운 장학금 항목 기능이 추가되었습니다
              </span>
            </div>
            <button className="text-sm text-brand-green hover:text-brand-green-dark transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 px-4 sm:px-6 py-8 max-w-[1280px] mx-auto w-full pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 왼쪽 사이드바 - 장학금 현황 및 공지사항 */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {/* 장학금 진행 상태 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-brand-text-primary">
                  장학금 현황
                </h2>
                <button
                  onClick={() =>
                    setIsScholarshipExpanded(!isScholarshipExpanded)
                  }
                  className="md:hidden text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  {isScholarshipExpanded ? "접기" : "펼치기"}
                </button>
              </div>

              <div
                className={`space-y-4 ${isScholarshipExpanded ? "block" : "hidden md:block"}`}
              >
                {/* 장학금 금액 카드 */}
                <div className="bg-green-50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-brand-green text-lg">💰</span>
                    <span className="text-sm text-brand-text-secondary">
                      총 장학금액
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-brand-green">
                    450,000 원
                  </p>
                </div>

                {/* 통계 카드들 */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-red-500 text-2xl mb-2">❤️</div>
                    <p className="text-xl font-bold text-brand-text-primary mb-1">
                      5 건
                    </p>
                    <p className="text-xs text-brand-text-secondary">좋아요</p>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-500 text-2xl mb-2">📋</div>
                    <p className="text-xl font-bold text-brand-text-primary mb-1">
                      1 건
                    </p>
                    <p className="text-xs text-brand-text-secondary">진행중</p>
                  </div>
                  <div className="text-center">
                    <div className="text-green-500 text-2xl mb-2">✅</div>
                    <p className="text-xl font-bold text-brand-text-primary mb-1">
                      4 건
                    </p>
                    <p className="text-xs text-brand-text-secondary">완료</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 학교 공지 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  학교 공지
                </h3>
                <button
                  onClick={() => setIsNoticeExpanded(!isNoticeExpanded)}
                  className="md:hidden text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  {isNoticeExpanded ? "접기" : "펼치기"}
                </button>
              </div>

              <div
                className={`space-y-4 ${isNoticeExpanded ? "block" : "hidden md:block"}`}
              >
                {noticeList.map((notice, index) => (
                  <div
                    key={notice.id}
                    className={`${index < noticeList.length - 1 ? "border-b border-gray-100 pb-4" : ""}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-brand-text-secondary">
                        📅 {formatDate(notice.date)}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-brand-green">
                        {notice.department}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-brand-text-primary mb-2">
                      {notice.title}
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleSummary(notice.id)}
                        className="text-xs text-brand-green hover:text-brand-green-dark font-medium transition-colors"
                      >
                        🤖 AI 요약
                      </button>
                      <span className="text-xs text-brand-green hover:text-brand-green-dark cursor-pointer font-medium">
                        상세보기
                      </span>
                    </div>
                    {showSummary[notice.id] && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                        <p className="text-xs text-brand-text-secondary">
                          {notice.summary}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 컨텐츠 영역 - 추천 프로그램 */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* 장학 프로그램 목록 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  추천 장학 프로그램
                </h3>
                <NavLink
                  to="/scholarship"
                  className="text-sm text-brand-green hover:text-brand-green-dark font-medium transition-colors"
                >
                  전체보기 →
                </NavLink>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {scholarshipList.map((scholarship) => (
                  <div
                    key={scholarship.id}
                    className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          scholarship.status === "urgent"
                            ? "bg-tag-red-bg text-tag-red-text"
                            : "bg-tag-blue-bg text-tag-blue-text"
                        }`}
                      >
                        {scholarship.deadline}
                      </span>
                      <button
                        onClick={() => toggleFavorite(scholarship.id)}
                        className="text-2xl hover:scale-110 transition-transform"
                      >
                        {favoriteScholarships[scholarship.id] ? "❤️" : "🤍"}
                      </button>
                    </div>
                    <h4 className="text-lg font-bold text-brand-text-primary mb-2">
                      {scholarship.title}
                    </h4>
                    <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed line-clamp-2">
                      {scholarship.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
                      <span>📍 {scholarship.period}</span>
                      <span>💰 {scholarship.amount}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => toggleSummary(scholarship.id)}
                        className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        🤖 AI 요약
                      </button>
                      <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
                        신청하기 →
                      </button>
                    </div>
                    {showSummary[scholarship.id] && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                        <p className="text-sm text-brand-text-secondary">
                          {scholarship.summary}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 교내외 프로그램 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  진행중인 교내/외 활동
                </h3>
                <NavLink
                  to="/program"
                  className="text-sm text-brand-green hover:text-brand-green-dark font-medium transition-colors"
                >
                  전체보기 →
                </NavLink>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {programList.map((program) => (
                  <div
                    key={program.id}
                    className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            program.status === "모집중"
                              ? "bg-tag-green-bg text-tag-green-text"
                              : program.status === "진행중"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {program.status}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                          {program.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-brand-text-primary mb-2">
                      {program.title}
                    </h4>
                    <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed line-clamp-2">
                      {program.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
                      <span>🏢 {program.department}</span>
                      <span>📅 {program.period}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                        상세보기
                      </button>
                      <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
                        신청하기 →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Scholarship;
