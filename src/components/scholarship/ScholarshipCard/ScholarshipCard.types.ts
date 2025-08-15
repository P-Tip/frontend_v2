import { IScholarship } from "@/types/scholarship";

export interface ScholarshipCardProps {
  scholarship: IScholarship;
  searchValue: string;
  onCartClick: (point: number) => void;
  onFavorite: (id: number) => void;
  isFavorite: boolean;
  onSummary: (id: string) => void;
  showSummary: boolean;
}

export interface ScholarshipCardActions {
  onHeartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDetailClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onApplyClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
