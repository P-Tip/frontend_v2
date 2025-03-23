import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IScholarship } from "@/types/scholarship";
import { toast } from "sonner";
import { useSearchScholarships } from "@/services/queries/scholarshipQuery";

import { IoSearchSharp } from "react-icons/io5";

interface SearchProps {
  onSearchResult: (results: IScholarship[]) => void;
}

const Search = ({ onSearchResult }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const searchMutation = useSearchScholarships((data) => {
    if (data.length === 0) {
      toast("검색 결과가 없습니다.");
    } else {
      onSearchResult(data);
    }
  });

  const handleSearchClick = () => {
    searchMutation.mutate({
      name: inputValue,
      point: 0,
      department: "",
    });
  };

  return (
    <div className="border border-ptu-green rounded-2xl flex align-center px-1 py-0.5 focus-within:border-2 transition-all duration-100 ease-in-out">
      <Input
        className="border-none shadow-none placeholder:text-ptu-grey-text"
        type="text"
        placeholder="어떤 프로그램을 찾고 있나요?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        className="[&>svg]:hover:text-ptu-green [&>svg]:focus-visible:text-ptu-green"
        variant="search"
        size="icon"
        type="submit"
        onClick={handleSearchClick}
      >
        <IoSearchSharp />
      </Button>
    </div>
  );
};

export default Search;
