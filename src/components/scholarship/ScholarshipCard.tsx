import { IScholarship } from "@/types/scholarship";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface ScholarshipCardProps {
  scholarship: IScholarship;
  onCartClick: (point: number) => void;
}

const ScholarshipCard = ({
  scholarship,
  onCartClick,
}: ScholarshipCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    const localstorageCart = JSON.parse(
      localStorage.getItem("scholarshipCart") || "[]",
    );
    const isExist = localstorageCart.includes(scholarship.id);
    setIsAdd(isExist);
  }, []);

  const handleCartClick = () => {
    const id = scholarship.id;
    const point = Number(scholarship.max_point);

    const localstorageCart = JSON.parse(
      localStorage.getItem("scholarshipCart") || "[]",
    );
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;

    if (localstoragePoint + point > 700000 && !isAdd) {
      toast("70만점을 초과할 수 없습니다.");
      return;
    } else {
      setIsAdd(!isAdd);
    }

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

  const stringFormat = (point: string) => {
    if (point === "미정") return point;
    return Number(point).toLocaleString();
  };

  return (
    <div className="pb-2">
      <div className="border border-ptu-gray rounded-xl	flex">
        <div
          className="text-left	w-5/6 p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="font-bold">{scholarship.programName}</p>
          <p className="text-gray-400	text-sm">{scholarship.department_name}</p>
          {scholarship.min_point === scholarship.max_point ? (
            <p className="font-bold">{stringFormat(scholarship.min_point)}</p>
          ) : (
            <p className="font-bold">
              {stringFormat(scholarship.min_point)} ~{" "}
              {stringFormat(scholarship.max_point)}
            </p>
          )}
        </div>
        <div
          className="w-1/6 border-l border-l-ptu-gray flex justify-center items-center cursor-pointer"
          onClick={handleCartClick}
        >
          {isAdd ? (
            <BsCartDash className="text-3xl text-ptu-red" />
          ) : (
            <BsCartPlus className="text-3xl text-ptu-green" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="p-3 bg-gray-100 rounded-lg text-sm">
          <p className="text-gray-600 pb-1">{scholarship.contents}</p>
          <Link to={scholarship.link} className="font-bold">
            바로가기
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCard;
