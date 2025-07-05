import React, { useState, useEffect } from "react";
import ScholarshipSidebar from "@/components/layout/Aside/left-aside";
import ScholarshipCard from "../components/card";
import { SCHOLARSHIP_LIST } from "@/constants";

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

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 relative">
      {/* 메인 컨텐츠 */}
      <main className="flex-1 py-8 max-w-[1200px] mx-auto w-full pb-20 md:pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScholarshipSidebar
            isScholarshipExpanded={isScholarshipExpanded}
            setIsScholarshipExpanded={setIsScholarshipExpanded}
            isNoticeExpanded={isNoticeExpanded}
            setIsNoticeExpanded={setIsNoticeExpanded}
            showSummary={showSummary}
            toggleSummary={toggleSummary}
          />

          {/* 메인 컨텐츠 영역 - 추천 프로그램 */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* 장학 프로그램 목록 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  추천 장학 프로그램
                </h3>
              </div>

              <div className="grid gap-4">
                {SCHOLARSHIP_LIST.map((scholarship) => (
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

            {/* 교내외 프로그램 카드 */}
            <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  진행중인 교내/외 활동
                </h3>
              </div>

              <div className="grid gap-4">
                {/* 진행중인 교내/외 활동 */}
                <>더 많은 프로그램 보기</>
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

export default Home;
