import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchProps {
  onSearchValue: (inputValue: string) => void;
}

const Search = ({ onSearchValue }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);

  const handleSearchClick = () => {
    onSearchValue(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    onSearchValue(debounceValue.trim());
  }, [debounceValue]);

  return (
    <div className="border border-ptu-green rounded-2xl flex align-center px-1 py-0.5 focus-within:border-2 transition-all duration-100 ease-in-out">
      <Input
        className="border-none shadow-none placeholder:text-ptu-grey-text"
        type="text"
        placeholder="어떤 프로그램을 찾고 있나요?"
        value={inputValue}
        onChange={handleInputChange}
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
