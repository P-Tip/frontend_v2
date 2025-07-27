import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  PiggyBank,
  Heart,
  ClipboardList,
  CheckCircle,
  Calendar,
  Bot,
  MapPin,
  Building,
} from "lucide-react";
import ScholarshipSidebar from "@/components/layout/Aside/left-aside";
import ScholarshipCard from "../components/card";
import LoginModal from "@/components/LoginModal";

const Home: React.FC = () => {
  // State management for various UI interactions
  const [showSummary, setShowSummary] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [isScholarshipExpanded, setIsScholarshipExpanded] = useState(false);
  const [isNoticeExpanded, setIsNoticeExpanded] = useState(false);
  const [favoriteScholarships, setFavoriteScholarships] = useState<{
    [key: string]: boolean;
  }>({});

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [totalLikedCount, setTotalLikedCount] = useState(0);

  // Initialize favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteScholarships");
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      setFavoriteScholarships(parsedFavorites);
      setTotalLikedCount(
        Object.keys(parsedFavorites).filter((key) => parsedFavorites[key])
          .length,
      );
    }
  }, []);

  // Handler functions
  const toggleFavorite = (id: string) => {
    setFavoriteScholarships((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      localStorage.setItem("favoriteScholarships", JSON.stringify(updated));

      const newLikedCount = Object.keys(updated).filter(
        (key) => updated[key],
      ).length;
      setTotalLikedCount(newLikedCount);

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

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeLoginModal();
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
      <main className="flex-1 py-8 max-w-[1200px] mx-auto w-full pb-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScholarshipSidebar
            isScholarshipExpanded={isScholarshipExpanded}
            setIsScholarshipExpanded={setIsScholarshipExpanded}
            isNoticeExpanded={isNoticeExpanded}
            setIsNoticeExpanded={setIsNoticeExpanded}
            noticeList={noticeList}
            showSummary={showSummary}
            toggleSummary={toggleSummary}
            formatDate={formatDate}
            isLoggedIn={isLoggedIn}
            openLoginModal={openLoginModal}
            totalLikedCount={totalLikedCount}
          />

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  추천 장학 프로그램
                </h3>
              </div>

              <div className="grid gap-4">
                {scholarshipList.map((scholarship) => (
                  <ScholarshipCard
                    key={scholarship.id}
                    id={scholarship.id}
                    title={scholarship.title}
                    description={scholarship.description}
                    deadline={scholarship.deadline}
                    status={scholarship.status}
                    period={scholarship.period}
                    amount={scholarship.amount}
                    summary={scholarship.summary}
                    isFavorite={!!favoriteScholarships[scholarship.id]}
                    onFavorite={toggleFavorite}
                    onSummary={toggleSummary}
                    showSummary={!!showSummary[scholarship.id]}
                  />
                ))}
                <>더 많은 장학 프로그램 보기</>
              </div>
            </div>

            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  진행중인 교내/외 활동
                </h3>
              </div>

              <div className="grid gap-4">
                {programList.map((program) => (
                  <div
                    key={program.id}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                  >
                    <h4 className="font-bold text-brand-text-primary mb-1">
                      {program.title}
                    </h4>
                    <p className="text-sm text-brand-text-secondary mb-2">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-brand-text-secondary">
                      <span>
                        <Calendar className="inline-block w-4 h-4 mr-1 text-gray-500" />
                        {program.period}
                      </span>
                      <span>
                        <Building className="inline-block w-4 h-4 mr-1 text-gray-500" />
                        {program.department}
                      </span>
                    </div>
                  </div>
                ))}
                <>더 많은 프로그램 보기</>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />

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

export default Home;
