import { PointProgress } from "@/components/PointProgress";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import Search from "@/components/scholarship/Search";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  useOrderScholarships,
  useScholarships,
} from "@/services/queries/scholarshipQuery";
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
import { ORDER_LIST } from "@/constants";
import { toast } from "sonner";

const Scholarship = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<IScholarship[]>([]);
  const [selectOrder, setSelectOrder] = useState<string>("장학금 정렬");
  const [selectOrderValue, setSelectOrderValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let localstoragePoint =
      Number(localStorage.getItem("scholarshipPoint")) || 0;
    setTotalPoint(localstoragePoint);
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
  };

  const handleOrderChange = (label: string, value: string) => {
    setSelectOrder(label);
    setSelectOrderValue(value);
  };

  const {
    data: orderScholarships = [],
    isFetching,
    isError,
  } = useOrderScholarships("", 0, selectOrderValue);
  // const { data: scholarships = [], isLoading, isError } = useScholarships();

  console.log(orderScholarships);

  if (isFetching) return <p>데이터를 불러오는 중...</p>;
  if (isError) return <p>데이터를 불러오는 데 실패했습니다.</p>;
  // if (isLoading) return <p>로딩 중...</p>;

  return (
    <div className="px-5 pt-5 flex flex-col gap-4 h-full">
      <PointProgress totalPoint={totalPoint} />

      <div className="md:grid md:grid-cols-[1fr_auto] gap-1">
        <Search
          onSearchResult={setSearchResults}
          onSearchValue={setSearchValue}
        />

        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger className="text-sm flex flex-row items-center justify-end float-right w-24 pt-2 md:pt-0 border-none focus:outline-none focus-visible:outline-none focus-visible:border-none">
            {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            {selectOrder}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>장학금 정렬</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {ORDER_LIST.map((order) => (
              <DropdownMenuItem
                key={order.value}
                onSelect={() => handleOrderChange(order.label, order.value)}
              >
                {order.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ScrollArea className="h-[60vh] sm:h-[65vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pr-4">
          {(searchResults.length > 0
            ? searchResults
            : orderScholarships.contents || []
          ).map((scholarship: IScholarship) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              searchValue={searchValue}
              onCartClick={(point) => handleCartClick(point)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Scholarship;
