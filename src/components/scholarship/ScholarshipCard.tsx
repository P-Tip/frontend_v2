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
import { calculateTotalPoints } from "@/utils";

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

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    const isExist = scholarshipData.some(
      (item: IScholarship) => item.id === scholarship.id,
    );
    setIsAdd(isExist);
  }, [scholarship.id]);

  const handleHeartClick = (e: React.MouseEvent<HTMLSpanElement>) => {
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

      if (newTotalPoints > 700000) {
        toast.error("최대 70만점을 초과할 수 없습니다.");
        return;
      }

      // 아직 추가되지 않은 상태면 추가 및 좋아요 활성화
      const updatedData = [...scholarshipData, scholarship];
      localStorage.setItem(SCHOLARSHIP_DATA, JSON.stringify(updatedData));
      setIsAdd(true);
      onCartClick(newTotalPoints);
    }
  };

  return (
    <Link
      to={scholarship.link}
      target="_blank"
      className="border border-ptu-grey-line rounded-2xl text-left flex flex-col gap-1 px-3.5 py-3 group
      transition-all duration-200 ease-in-out hover:bg-ptu-light-green-bg hover:scale-[1.025] active:scale-[0.975]"
      onClick={(e) => {
        if (scholarship.link === "") {
          e.preventDefault();
          toast.error("링크를 준비중입니다.");
          return;
        }
      }}
    >
      <span className="flex justify-between items-center">
        <span className="flex items-center gap-x-2">
          <Badge variant="distant">미정</Badge>
          {/*<p className="text-xs text-ptu-grey-text">(~3/21)</p>*/}
        </span>
        <span onClick={handleHeartClick}>
          {isAdd ? (
            <IoMdHeart className="text-[#FF6B6B] text-xl" />
          ) : (
            <IoMdHeartEmpty className="text-ptu-grey-text text-xl" />
          )}
        </span>
      </span>

      <Highlighter
        className={`text-xl font-bold text-black ${scholarship.link === "" ? "" : "group-hover:text-ptu-green-hover"}`}
        searchWords={[searchValue]}
        textToHighlight={scholarship.programName}
      >
        {scholarship.programName}
      </Highlighter>

      <p className="text-xs text-ptu-grey-text">{scholarship.contents}</p>
      <div className="text-xs flex flex-row gap-x-2 text-black">
        <span className="flex flex-row items-center gap-x-0.5">
          <PiBuildingApartment />
          <p>{scholarship.department_name}</p>
        </span>
        <span className="flex flex-row items-center gap-x-0.5">
          <PiMoney />
          {scholarship.min_point === scholarship.max_point ? (
            <p>{minPoint} 포인트</p>
          ) : (
            <p>
              {minPoint} ~ {maxPoint} 포인트
            </p>
          )}
        </span>
      </div>
    </Link>
  );
};

export default ScholarshipCard;
