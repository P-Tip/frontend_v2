import { create } from "zustand";

interface keywordState {
  keyword: string;
  setKeyword: (value: string) => void;
}

export const useKeywordStore = create<keywordState>((set) => ({
  keyword: "",
  setKeyword: (value: string) => set({ keyword: value }),
}));
