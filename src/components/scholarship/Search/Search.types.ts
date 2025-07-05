export interface SearchProps {
  onSearchValue: (inputValue: string) => void;
}

export interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchButtonProps {
  onClick: () => void;
  disabled?: boolean;
}
