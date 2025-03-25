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
import { SORT_LIST } from "@/constants";

const Scholarship = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [searchValue, setSearchValue] = useState("");
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

  const handleSortChange = (label: string, value: string) => {
    setSelectSort(label);
    console.log(value);
  };

  const { data: scholarships = [], isLoading, isError } = useScholarships();

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;

  return (
    <div className="px-5 pt-5 pb-3 flex flex-col gap-4">
      <PointProgress totalPoint={totalPoint} />

      <div className="md:grid md:grid-cols-[1fr_auto] gap-1">
        <Search
          onSearchResult={setSearchResults}
          onSearchValue={setSearchValue}
        />

        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className="text-sm flex flex-row items-center justify-end float-right w-24 pt-2 md:pt-0 border-none focus:outline-none focus-visible:outline-none focus-visible:border-none">
            {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            {selectSort}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>장학금 정렬</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {SORT_LIST.map((sort) => (
              <DropdownMenuItem
                key={sort.value}
                onSelect={() => handleSortChange(sort.label, sort.value)}
              >
                {sort.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[calc(61vh)] max-sm:h-[calc(72vh)] overflow-y-auto">
        {(searchResults.length > 0 ? searchResults : scholarships).map(
          (scholarship: IScholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              searchValue={searchValue}
              onCartClick={(point) => handleCartClick(point)}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Scholarship;
