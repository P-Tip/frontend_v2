export interface ScholarshipCardProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status: string;
  period: string;
  amount: string;
  summary: string;
  isFavorite: boolean;
  onFavorite: (id: string) => void;
  onSummary: (id: string) => void;
  showSummary: boolean;
}

export type CardStatus = "urgent" | "normal" | "finished";

export interface BaseCardProps {
  id: string;
  title: string;
  description: string;
  className?: string;
}
