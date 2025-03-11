import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import DepartmentSearch from "./DepartmentSearch";
import { IScholarship } from "@/types/scholarship";
import { toast } from "sonner";
import { useSearchScholarships } from "@/services/queries/scholarshipQuery";

interface SearchProps {
  onSearchResult: (results: IScholarship[]) => void;
}

const Search = ({ onSearchResult }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [departmentValue, setDepartmentValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchMutation = useSearchScholarships((data) => {
    if (data.length === 0) {
      toast("검색 결과가 없습니다.");
    } else {
      onSearchResult(data);
    }
    setIsOpen(false);
  });

  const handleSearchClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      searchMutation.mutate({
        name: inputValue,
        point: sliderValue,
        department: departmentValue,
      });
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setInputValue("");
      setSliderValue(0);
      setDepartmentValue("");
    }
  }, [isOpen]);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full items-center space-x-2"
        onFocus={() => setIsOpen(true)}
      >
        <Input
          type="text"
          placeholder="검색어를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" onClick={handleSearchClick}>
          검색
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white mt-1 p-2 shadow-lg z-10">
          <div className="my-2">
            <Slider
              defaultValue={[0]}
              max={700000}
              step={10000}
              onValueChange={(value) => setSliderValue(value[0])}
            />
            <p className="text-sm text-gray-600">
              {sliderValue.toLocaleString()}점
            </p>
          </div>

          <div>
            <DepartmentSearch
              onSelectDepartment={(department) =>
                setDepartmentValue(department)
              }
            />
          </div>

          <Button
            className="mt-3 w-full bg-ptu-gray"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            닫기
          </Button>
        </div>
      )}
    </div>
  );
};

export default Search;
