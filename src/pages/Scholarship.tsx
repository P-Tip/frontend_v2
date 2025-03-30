import { PointProgress } from "@/components/PointProgress";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import Search from "@/components/scholarship/Search";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useInfiniteScholarships } from "@/services/queries/scholarshipQuery";
import { IScholarship } from "@/types/scholarship";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchNotFound from "@/components/scholarship/SearchNotFound";
import { SCHOLARSHIP_DATA, ORDER_LIST } from "@/constants";

const Scholarship = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [selectOrder, setSelectOrder] = useState<string>("장학금 정렬");
  const [selectOrderValue, setSelectOrderValue] = useState<string>("end_date");
  const [isOpen, setIsOpen] = useState(false);

  // 총 포인트 계산 함수
  const calculateTotalPoints = (data: IScholarship[]) => {
    return data.reduce((sum, item) => sum + Number(item.max_point), 0);
  };

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    // 데이터로부터 포인트 계산
    setTotalPoint(calculateTotalPoints(scholarshipData));
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
  };

  const handleOrderChange = (label: string, value: string) => {
    setSelectOrder(label);
    setSelectOrderValue(value);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteScholarships(searchValue, selectOrderValue);
  const orderScholarships = data?.pages.flatMap((page) => page.contents) || [];

  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="px-5 pt-5 pb-0 sm:pb-5 flex flex-col gap-4">
      <PointProgress totalPoint={totalPoint} />

      <div className="md:grid md:grid-cols-[1fr_auto] gap-1">
        <Search onSearchValue={setSearchValue} />

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

      {orderScholarships.length === 0 ? (
        <SearchNotFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-16 sm:mb-0">
          {orderScholarships.map((scholarship: IScholarship, index) => (
            <ScholarshipCard
              key={`${scholarship.id}-${index}`}
              scholarship={scholarship}
              searchValue={searchValue}
              onCartClick={(point) => handleCartClick(point)}
            />
          ))}

          {hasNextPage && (
            <div ref={observerRef}>
              <AiOutlineEllipsis className="text-2xl mx-auto" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scholarship;
