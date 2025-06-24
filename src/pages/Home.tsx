import { PointProgress } from "@/components/PointProgress";
import { useEffect, useState } from "react";
import { SCHOLARSHIP_DATA } from "@/constants";
import { calculateTotalPoints } from "@/utils";
import { IScholarship } from "@/types/scholarship";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [likedScholarships, setLikedScholarships] = useState<IScholarship[]>(
    [],
  );

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    setLikedScholarships(scholarshipData);
    setTotalPoint(calculateTotalPoints(scholarshipData));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-6 animate-fadeIn">
      {/* 2열 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 왼쪽 열: 장학금 현황 + 학교 공지 */}
        <div className="space-y-6">
          {/* 장학금 현황 섹션 */}
          <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-brand-text-primary">
                장학금 현황
              </h2>
              <span className="text-sm text-brand-text-secondary">
                2025-1학기
              </span>
            </div>

            {/* 장학금 금액 카드 */}
            <div className="bg-green-50 rounded-2xl p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-brand-green text-lg">💰</span>
                <span className="text-sm text-brand-text-secondary">
                  장학금
                </span>
              </div>
              <p className="text-2xl font-bold text-brand-green">450,000 원</p>
            </div>

            {/* 통계 카드들 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-red-500 text-2xl mb-2">❤️</div>
                <p className="text-2xl font-bold text-brand-text-primary mb-1">
                  5 건
                </p>
                <p className="text-xs text-brand-text-secondary">좋아요</p>
              </div>
              <div className="text-center">
                <div className="text-blue-500 text-2xl mb-2">📋</div>
                <p className="text-2xl font-bold text-brand-text-primary mb-1">
                  1 건
                </p>
                <p className="text-xs text-brand-text-secondary">신청중</p>
              </div>
              <div className="text-center">
                <div className="text-purple-500 text-2xl mb-2">✅</div>
                <p className="text-2xl font-bold text-brand-text-primary mb-1">
                  4 건
                </p>
                <p className="text-xs text-brand-text-secondary">완료</p>
              </div>
            </div>
          </div>

          {/* 학교 공지 섹션 */}
          <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border">
            <h3 className="text-xl font-bold text-brand-text-primary mb-6">
              학교 공지
            </h3>

            <div className="space-y-4">
              {/* 공지사항 1 */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-brand-text-secondary">
                    📅 2025.05.30
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-brand-green">
                    AI 학과
                  </span>
                  <span className="text-xs text-brand-green hover:text-brand-green-dark cursor-pointer font-medium">
                    상세보기
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-brand-text-primary">
                  2025학년도 1학기 장학금 신청 안내
                </h4>
              </div>

              {/* 공지사항 2 */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-brand-text-secondary">
                    📅 2025.05.28
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-brand-green">
                    AI 학과
                  </span>
                  <span className="text-xs text-brand-green hover:text-brand-green-dark cursor-pointer font-medium">
                    상세보기
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-brand-text-primary">
                  하계 인턴십 프로그램 참가자 모집
                </h4>
              </div>

              {/* 공지사항 3 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-brand-text-secondary">
                    📅 2025.05.25
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-brand-green">
                    AI 학과
                  </span>
                  <span className="text-xs text-brand-green hover:text-brand-green-dark cursor-pointer font-medium">
                    상세보기
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-brand-text-primary">
                  2025학년도 2학기 국가장학금 신청 안내
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* 오른쪽 열: 추천 장학 프로그램 */}
        <div>
          <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border">
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

            {/* 장학금 카드들 */}
            <div className="space-y-4">
              {/* 첫 번째 장학금 카드 */}
              <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-tag-red-bg text-tag-red-text">
                    마감임박 (~6/10)
                  </span>
                  <button className="text-2xl hover:scale-110 transition-transform">
                    ❤️
                  </button>
                </div>
                <h4 className="text-lg font-bold text-brand-text-primary mb-2">
                  학생성장 공부한 장학금
                </h4>
                <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                  학업 성취도 향상을 위한 학생 성장 공부한 성장하면 위한 장학금
                  지원 프로그램
                </p>
                <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
                  <span>📍 2학기</span>
                  <span>💰 50,000 ~ 100,000 원/월</span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    🤖 AI 요약
                  </button>
                  <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
                    신청하기 →
                  </button>
                </div>
              </div>

              {/* 두 번째 장학금 카드 */}
              <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-tag-red-bg text-tag-red-text">
                    마감임박 (~6/15)
                  </span>
                  <button className="text-2xl hover:scale-110 transition-transform">
                    🤍
                  </button>
                </div>
                <h4 className="text-lg font-bold text-brand-text-primary mb-2">
                  취업박람회 현장 방문 보고서 작성
                </h4>
                <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                  취업박람회의 방문하고 방문 관련 보고서를 작성 후 제출
                </p>
                <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
                  <span>📍 1학기</span>
                  <span>💰 50,000 원 (일시불)</span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    🤖 AI 요약
                  </button>
                  <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
                    신청하기 →
                  </button>
                </div>
              </div>

              {/* 세 번째 장학금 카드 */}
              <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-tag-blue-bg text-tag-blue-text">
                    30일 전 (~7/5)
                  </span>
                  <button className="text-2xl hover:scale-110 transition-transform">
                    🤍
                  </button>
                </div>
                <h4 className="text-lg font-bold text-brand-text-primary mb-2">
                  창업 지원 장학금
                </h4>
                <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                  창업 아이디어를 가진 학생들을 위한 지원 프로그램
                </p>
                <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
                  <span>📍 1학기</span>
                  <span>💰 최대 200,000 원</span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    🤖 AI 요약
                  </button>
                  <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
                    신청하기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
