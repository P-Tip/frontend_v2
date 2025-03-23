import { PointProgress } from "@/components/PointProgress";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import Search from "@/components/scholarship/Search";
import { useScholarships } from "@/services/queries/scholarshipQuery";
import { IScholarship } from "@/types/scholarship";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Scholarship = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [searchResults, setSearchResults] = useState<IScholarship[]>([]);
  const [selectSort, setSelectSort] = useState<string>("사전순");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;
    setTotalPoint(localstoragePoint);
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
  };

  const handleSortChange = (selectedSort: string) => {
    setSelectSort(selectedSort);
  };

  const { data: scholarships = [], isLoading, isError } = useScholarships();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <div className="px-5 pt-5 pb-3 flex flex-col gap-4">
      <PointProgress totalPoint={totalPoint} />

      <div className="md:grid md:grid-cols-[1fr_auto] gap-1">
        <Search onSearchResult={setSearchResults} />

        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className="text-sm flex flex-row items-center justify-end float-right w-24 pt-2 md:pt-0 border-none focus-visible:outline-none focus-visible:border-none">
            {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            {selectSort}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>장학금 정렬</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => handleSortChange("사전순")}>
              사전순
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleSortChange("마감순")}>
              마감순
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleSortChange("낮은 포인트순")}
            >
              낮은 포인트순
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleSortChange("높은 포인트순")}
            >
              높은 포인트순
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 h-[calc(63vh)] sm:h-[calc(65vh)] overflow-y-auto">
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
