import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import Search from "@/components/scholarship/Search";
import { Progress } from "@/components/ui/progress";
import { getScholarships } from "@/services/scholarshipApi";
import { IScholarship } from "@/types/scholarship";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Scholarship = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [searchResults, setSearchResults] = useState<IScholarship[]>([]);

  useEffect(() => {
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;
    setTotalPoint(localstoragePoint);
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
  };

  const {
    data: scholarships,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["scholarships"],
    queryFn: () => getScholarships(),
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <div className="px-3">
      <Search onSearchResult={setSearchResults} />

      <div className="mt-4">
        <Progress value={(totalPoint / 700000) * 100} />
        <p className="pt-1">
          <span className="font-bold">{totalPoint.toLocaleString()}점</span>
          <span className="text-gray-400"> / 700,000점</span>
        </p>
      </div>

      <div className="mt-2 h-[calc(74vh)] sm:h-[calc(79vh)] overflow-y-auto">
        <div>
          <p className="text-gray-400	text-sm pb-1 text-left">2025.02.27 기준</p>
        </div>
        {(searchResults.length > 0 ? searchResults : scholarships).map(
          (scholarship: IScholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              onCartClick={(point) => handleCartClick(point)}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Scholarship;
