import { useEffect, useState } from "react";

export function useDebounce(value: string) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceValue(value);
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [value]);

  return debounceValue;
}
