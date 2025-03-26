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
    const localstorageCart = JSON.parse(
      localStorage.getItem("scholarshipCart") || "[]",
    );
    const isExist = localstorageCart.includes(scholarship.id);
    setIsAdd(isExist);
  }, []);

  const handleHeartClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    const id = scholarship.id;
    const point = Number(scholarship.max_point);

    const localstorageCart = JSON.parse(
      localStorage.getItem("scholarshipCart") || "[]",
    );
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;

    setIsAdd(!isAdd);

    if (isAdd) {
      const updatedCart = localstorageCart.filter(
        (itemId: number) => itemId !== id,
      );
      localStorage.setItem("scholarshipCart", JSON.stringify(updatedCart));
      localstoragePoint -= point;
    } else {
      localstorageCart.push(id);
      localStorage.setItem("scholarshipCart", JSON.stringify(localstorageCart));
      localstoragePoint += point;
    }
    localStorage.setItem("scholarshipPoint", localstoragePoint.toString());

    onCartClick(localstoragePoint);
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
