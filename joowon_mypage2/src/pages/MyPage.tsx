import { MypagePointProgress } from "@/components/PointProgress";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { IScholarship } from "@/types/scholarship";
import { useEffect, useState } from "react";
import GoogleIcon from "@/icons/Google";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { calculateTotalPoints } from "@/utils";
import { SCHOLARSHIP_DATA } from "@/constants";

const MyPage = () => {
  const [likedScholarships, setLikedScholarships] = useState<IScholarship[]>(
    [],
  );
  const [totalPoint, setTotalPoint] = useState(0);
  const [login, setLogin] = useState(false);

  // 총 포인트 계산 함수

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );

    setLikedScholarships(scholarshipData);
    // 데이터로부터 포인트 계산
    setTotalPoint(calculateTotalPoints(scholarshipData));
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    setLikedScholarships(scholarshipData);
  };

  return (
    <div className="px-5 pt-11 pb-3 flex flex-col gap-4">
      {login ? (
        <div className="flex justify-between items-center">
          <h1 className="text-3xl	font-semibold">홍길동님</h1>
          <Button
            variant="search"
            className="rounded-xl bg-ptu-green hover:bg-ptu-green-hover text-white"
            onClick={() => setLogin(!login)}
          >
            로그아웃
          </Button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-start">
            지금 로그인해서 다른 기기에서도
            <br />
            나의 장학금을 확인해보세요!
          </h1>
          <span
            onClick={() => {
              toast.error("준비중인 기능입니다.");
            }}
            className="cursor-pointer"
          >
            <GoogleIcon />
          </span>
        </div>
      )}

      <MypagePointProgress totalPoint={totalPoint} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {likedScholarships.map((scholarship) => (
          <ScholarshipCard
            key={scholarship.id}
            scholarship={scholarship}
            onCartClick={(point) => handleCartClick(point)}
            // TODO: 빌드 오류 해결 props 넘겨주기
            searchValue={""}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPage;
