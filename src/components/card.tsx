import React from "react";
import { Heart, MapPin, PiggyBank, Bot } from "lucide-react";

interface ScholarshipCardProps {
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

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({
  id,
  title,
  description,
  deadline,
  status,
  period,
  amount,
  summary,
  isFavorite,
  onFavorite,
  onSummary,
  showSummary,
}) => (
  <div className="border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-all duration-200">
    <div className="flex justify-between items-start mb-3">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
          status === "urgent"
            ? "bg-tag-red-bg text-tag-red-text"
            : "bg-tag-blue-bg text-tag-blue-text"
        }`}
      >
        {deadline}
      </span>
      <button
        onClick={() => onFavorite(id)}
        className="text-2xl hover:scale-110 transition-transform"
      >
        <Heart
          className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-300"}
        />
      </button>
    </div>
    <h4 className="text-lg font-bold text-brand-text-primary mb-2 text-left">
      {title}
    </h4>
    <p className="text-sm text-brand-text-secondary mb-3 leading-relaxed line-clamp-2 text-left">
      {description}
    </p>
    <div className="flex items-center space-x-4 text-sm text-brand-text-secondary mb-4">
      <span className="flex items-center gap-1">
        <MapPin className="inline w-4 h-4 mr-1" />
        {period}
      </span>
      <span className="flex items-center gap-1">
        <PiggyBank className="inline w-4 h-4 mr-1" />
        {amount}
      </span>
    </div>
    <div className="flex space-x-2">
      <button
        onClick={() => onSummary(id)}
        className="flex-1 py-2 px-4 bg-gray-100 text-brand-text-primary text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
      >
        <Bot className="inline w-4 h-4 mr-1" /> AI 요약
      </button>
      <button className="flex-1 py-2 px-4 bg-brand-green text-white text-sm font-semibold rounded-lg hover:bg-brand-green-dark transition-colors">
        신청하기 →
      </button>
    </div>
    {showSummary && (
      <div className="mt-3 p-3 bg-gray-50 rounded-lg animate-fadeIn">
        <p className="text-sm text-brand-text-secondary">{summary}</p>
      </div>
    )}
  </div>
);

export default ScholarshipCard;
