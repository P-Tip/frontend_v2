import React, { useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Star, Coins, Search, Filter } from "lucide-react";
import { useInfiniteScholarships } from "@/services/queries/scholarshipQuery";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Scholarship: React.FC = () => {
  // 무한 스크롤 훅 사용 (query, order는 일단 빈 문자열/기본값)
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteScholarships("", "");
  console.log(data);
  // 좋아요/포인트 등은 일단 더미
  const handleCartClick = () => {};

  // Intersection Observer로 마지막 카드 감지
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastCardRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 relative">
      <main className="flex-1 py-8 max-w-[1200px] mx-auto w-full px-6">
        {/* 상단 타이틀 및 안내 카드 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-brand-text-primary mb-1">
                교내 솔선수범 장학금 프로그램
              </h1>
              <p className="text-base text-brand-text-secondary">
                학생들의 자발적인 성장과 발전을 지원하는 다양한 장학 프로그램을
                확인하세요.
              </p>
            </div>
            <NavLink
              to="/"
              className="text-brand-green text-base font-semibold flex items-center gap-1 hover:underline"
            >
              ← 뒤로가기
            </NavLink>
          </div>

          {/* 안내 카드 */}
          <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-8 items-start md:items-stretch mb-6">
            <div className="flex-1 flex gap-4 items-start">
              <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                <Star className="text-brand-green w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-brand-text-primary mb-1">
                  장학금 개요
                </div>
                <div className="text-sm text-brand-text-secondary">
                  솔선수범 장학으로 인정되는 부서별 프로그램에 참여한 학생에게
                  포인트를 부여하고 적립된 포인트를 장학금으로 지급합니다.
                </div>
              </div>
            </div>
            <div className="flex-1 flex gap-4 items-start">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mt-1">
                <Coins className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-brand-text-primary mb-1">
                  장학금 지급
                </div>
                <ul className="text-sm text-brand-text-secondary list-disc pl-4">
                  <li>학기별 1회 지급</li>
                  <li>최대 70만 포인트까지 인정</li>
                  <li>5만 포인트 미만 시 장학금 지급 불가</li>
                  <li>포인트는 장학금액과 일치</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 검색/필터 영역 */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-4 items-center mb-8">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="프로그램명 또는 키워드 검색"
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto justify-end">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" /> 필터
            </Button>
            <Button variant="outline">전체 카테고리</Button>
            <Button variant="outline">전체 상태</Button>
          </div>
        </div>

        {/* 무한 스크롤 장학금 카드 리스트 */}
        <div className="w-full min-h-[200px] grid grid-cols-1 md:grid-cols-2 gap-6">
          {status === "pending" && (
            <div className="col-span-2 text-center py-10 text-gray-400">
              로딩 중...
            </div>
          )}
          {status === "error" && (
            <div className="col-span-2 text-center py-10 text-red-400">
              데이터를 불러오지 못했습니다.
            </div>
          )}
          {data
            && data.pages?.map((page, pageIdx) =>
              page.contents?.map((scholarship: any, idx: number) => {
                const isLast =
                  pageIdx === data.pages.length - 1
                  && idx === page.contents.length - 1;
                return (
                  <div
                    key={scholarship.id}
                    ref={isLast ? lastCardRef : undefined}
                  >
                    <ScholarshipCard
                      scholarship={scholarship}
                      searchValue={""}
                      onCartClick={handleCartClick}
                    />
                  </div>
                );
              }),
            )}
        </div>
        {isFetchingNextPage && (
          <div className="w-full text-center py-6 text-brand-green">
            불러오는 중...
          </div>
        )}
        {!hasNextPage && status === "success" && (
          <div className="w-full text-center py-6 text-gray-400">
            모든 데이터를 불러왔습니다.
          </div>
        )}
      </main>
    </div>
  );
};

export default Scholarship;
