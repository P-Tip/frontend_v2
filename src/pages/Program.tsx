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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCategoryStyle, getStatusStyle } from "@/utils/style";
import { CATEGORIES, PROGRAMS } from "@/constants";

const Program = () => {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [likedPrograms, setLikedPrograms] = useState<number[]>([]);

  const filteredPrograms =
    activeCategory === "전체"
      ? PROGRAMS
      : PROGRAMS.filter((program) => program.category === activeCategory);

  const toggleLike = (programId: number) => {
    setLikedPrograms((prev) =>
      prev.includes(programId)
        ? prev.filter((id) => id !== programId)
        : [...prev, programId],
    );
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
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="프로그램 검색"
                className="pl-10"
              />
              <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* 필터 드롭다운 */}
            <div className="flex gap-3">
              <Button variant="outline">
                <span>필터</span>
                <HiChevronDown className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                <span>마감임박순</span>
                <HiChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          {/* 카테고리 태그 */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleLike(program.id)}
              >
                {likedPrograms.includes(program.id) ? (
                  <HiHeart className="w-6 h-6 text-red-500" />
                ) : (
                  <HiOutlineHeart className="w-6 h-6 text-gray-400" />
                )}
              </Button>
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
              <Button variant="secondary" className="flex-1">
                상세 정보
              </Button>
              <Button className="flex-1">신청하기</Button>
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
