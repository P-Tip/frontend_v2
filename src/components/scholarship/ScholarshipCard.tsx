import { IScholarship } from "@/types/scholarship";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { PiBuildingApartment } from "react-icons/pi";
import { PiMoney } from "react-icons/pi";
import Highlighter from "react-highlight-words";
import { toast } from "sonner";
import { SCHOLARSHIP_DATA } from "@/constants";
import { calculateTotalPoints, clickEvent, getFormatDate } from "@/utils";
import { Button } from "@/components/ui/button";

interface ScholarshipCardProps {
  scholarship: IScholarship;
  searchValue: string;
  onCartClick: (point: number) => void;
}

const ScholarshipCard = ({
  scholarship,
  searchValue,
  onCartClick,
}: ScholarshipCardProps) => {
  const [isAdd, setIsAdd] = useState(false);
  const minPoint = Number(scholarship.min_point).toLocaleString();
  const maxPoint = Number(scholarship.max_point).toLocaleString();
  const date = getFormatDate(scholarship.end_date);

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    const isExist = scholarshipData.some(
      (item: IScholarship) => item.id === scholarship.id,
    );
    setIsAdd(isExist);
  }, [scholarship.id]);

  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const id = scholarship.id;

    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );

    let currentTotalPoints = calculateTotalPoints(scholarshipData);

    if (isAdd) {
      // 이미 추가된 상태면 삭제 및 좋아요 비활성화
      const updatedData = scholarshipData.filter(
        (item: IScholarship) => item.id !== id,
      );
      localStorage.setItem(SCHOLARSHIP_DATA, JSON.stringify(updatedData));
      setIsAdd(false);

      onCartClick(calculateTotalPoints(updatedData));
    } else {
      // 추가시 포인트 계산 후 제한 체크
      const newTotalPoints = currentTotalPoints + Number(scholarship.max_point);

      // 아직 추가되지 않은 상태면 추가 및 좋아요 활성화
      const updatedData = [...scholarshipData, scholarship];
      localStorage.setItem(SCHOLARSHIP_DATA, JSON.stringify(updatedData));
      setIsAdd(true);
      onCartClick(newTotalPoints);
      clickEvent("좋아요 버튼", "좋아요 클릭");
      console.log("durl");
    }
  };

  const handleDetailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // 상세정보 로직 추가 가능
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (scholarship.link === "") {
      toast.error("링크를 준비중입니다.");
      return;
    }
    window.open(scholarship.link, "_blank");
    clickEvent("장학금 신청", "신청하기 클릭");
  };

  return (
    <div className="rounded-3xl bg-brand-surface p-6 shadow-sm border border-brand-border hover:shadow-lg transition-all duration-300 ease-in-out animate-fadeIn group">
      {/* 상단: Badge와 Heart 아이콘 */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-x-2">
          <Badge variant={date.color}>{date.label}</Badge>
          {date.date && (
            <p className="text-xs text-brand-text-secondary font-medium">
              (~{date.date})
            </p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleHeartClick}
          className="p-1 hover:scale-110 transition-transform duration-200"
        >
          {isAdd ? (
            <IoMdHeart className="text-red-500 text-xl w-6 h-6" />
          ) : (
            <IoMdHeartEmpty className="text-brand-text-secondary text-xl w-6 h-6 hover:text-red-500 transition-colors duration-200" />
          )}
        </Button>
      </div>

      {/* 중간: 제목과 설명 */}
      <div className="mb-5">
        <Highlighter
          className="text-xl font-bold text-brand-text-primary mb-3 block leading-7 group-hover:text-brand-green transition-colors duration-300"
          searchWords={[searchValue]}
          textToHighlight={scholarship.programName}
          highlightStyle={{
            backgroundColor: "#2da87a",
            color: "#fff",
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          {scholarship.programName}
        </Highlighter>
        <p className="text-sm text-brand-text-secondary leading-6 line-clamp-2">
          {scholarship.contents}
        </p>
      </div>

      {/* 중간: 장학금 정보 (2열 그리드) */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <PiBuildingApartment className="text-brand-text-secondary text-lg flex-shrink-0" />
          <span className="text-sm text-brand-text-primary font-medium truncate">
            {scholarship.department_name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <PiMoney className="text-brand-text-secondary text-lg flex-shrink-0" />
          <span className="text-sm text-brand-text-primary font-medium truncate">
            {scholarship.min_point === scholarship.max_point
              ? `${minPoint} 포인트`
              : `${minPoint} ~ ${maxPoint} 포인트`}
          </span>
        </div>
      </div>

      {/* 하단: 버튼들 */}
      <div className="flex space-x-3">
        <Button
          variant="secondary"
          onClick={handleDetailClick}
          className="flex-1"
        >
          상세정보
        </Button>
        <Button onClick={handleApplyClick} className="flex-1">
          신청하기
        </Button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
