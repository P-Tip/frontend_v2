import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDebounce } from "@/hooks/useDebounce";
import { useKeywordStore } from "@/stores/keyword";

interface SearchProps {
  onSearchValue: (inputValue: string) => void;
}

const Search = ({ onSearchValue }: SearchProps) => {
  const { keyword, setKeyword } = useKeywordStore();
  const debounceValue = useDebounce(keyword);

  const handleSearchClick = () => {
    onSearchValue(keyword);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    onSearchValue(debounceValue.trim());
  }, [debounceValue]);

  return (
    <div className="border border-brand-green rounded-xl flex align-center px-1 py-0.5 focus-within:border-2 focus-within:border-brand-green-dark focus-within:shadow-sm transition-all duration-300 ease-in-out hover:shadow-sm">
      <Input
        className="border-none shadow-none placeholder:text-brand-text-secondary text-brand-text-primary font-medium focus:placeholder:text-brand-text-secondary/70 transition-colors duration-200"
        type="text"
        placeholder="어떤 프로그램을 찾고 있나요?"
        value={keyword}
        onChange={handleInputChange}
      />
      <Button
        className="[&>svg]:hover:text-brand-green [&>svg]:focus-visible:text-brand-green [&>svg]:text-brand-text-secondary hover:bg-green-50 transition-all duration-200"
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
