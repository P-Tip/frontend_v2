import { MypagePointProgress } from "@/components/PointProgress";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { useScholarships } from "@/services/queries/scholarshipQuery";
import { useEffect, useState } from "react";
import GoogleIcon from "@/icons/Google";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

const MyPage = () => {
  const [likeId, setLikeId] = useState<number[]>([]);
  const [totalPoint, setTotalPoint] = useState(0);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    let localstorageId = JSON.parse(
      localStorage.getItem("scholarshipCart") || "[]",
    );
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;
    setLikeId(localstorageId);
    setTotalPoint(localstoragePoint);
  }, []);

  const { data: scholarships = [], isLoading, isError } = useScholarships();
  const likedScholarships = scholarships.filter((scholarship) =>
    likeId.includes(scholarship.id),
  );

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
  };

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

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
      <ScrollArea className="h-[60vh] sm:h-[65vh]">
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
      </ScrollArea>
    </div>
  );
};

export default MyPage;
