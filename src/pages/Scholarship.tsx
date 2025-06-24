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
    <div className="px-5 pt-5 pb-5 sm:pb-5 flex flex-col gap-6 h-full animate-fadeIn">
      {/* 대시보드 영역 */}
      <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-all duration-300">
        <h2 className="text-xl font-bold text-brand-text-primary mb-4 leading-7">
          장학금 현황
        </h2>

        {/* PointProgress 컴포넌트 */}
        <div className="mb-6">
          <PointProgress totalPoint={totalPoint} />
        </div>

        {/* 검색 및 정렬 영역 */}
        <div className="md:grid md:grid-cols-[1fr_auto] gap-4 items-end">
          <div className="mb-4 md:mb-0">
            <Search onSearchValue={setSearchValue} />
          </div>

          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger className="text-sm flex flex-row items-center justify-end w-full md:w-auto pt-2 md:pt-0 border-none focus:outline-none focus-visible:outline-none focus-visible:border-none font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200">
              {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              <span className="ml-1">{selectOrder}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="animate-fadeIn">
              <DropdownMenuLabel className="font-semibold">
                장학금 정렬
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {ORDER_LIST.map((order) => (
                <DropdownMenuItem
                  key={order.value}
                  onSelect={() => handleOrderChange(order.label, order.value)}
                  className="font-medium hover:bg-green-50 hover:text-brand-green transition-colors duration-200"
                >
                  {order.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* 장학금 카드 목록 */}
      {orderScholarships.length === 0 ? (
        <SearchNotFound />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orderScholarships.map((scholarship: IScholarship, index) => (
            <ScholarshipCard
              key={`${scholarship.id}-${index}`}
              scholarship={scholarship}
              searchValue={searchValue}
              onCartClick={(point) => handleCartClick(point)}
            />
          ))}

          {hasNextPage && (
            <div
              ref={observerRef}
              className="col-span-full flex justify-center py-6"
            >
              <div className="flex items-center space-x-2 text-brand-text-secondary">
                <AiOutlineEllipsis className="text-2xl animate-pulse" />
                <span className="text-sm font-medium">
                  더 많은 장학금을 불러오는 중...
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scholarship;
