import React from "react";
import { Heart, MapPin, PiggyBank, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScholarshipCardProps } from "./Card.types";

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
    <div className="flex justify-between items-start">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
          status === "urgent"
            ? "bg-tag-red-bg text-tag-red-text"
            : "bg-tag-blue-bg text-tag-blue-text"
        }`}
      >
        {deadline}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onFavorite(id)}
        className="text-2xl hover:scale-110 transition-transform"
      >
        <Heart
          className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-300"}
        />
      </Button>
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
      <Button
        variant="secondary"
        onClick={() => onSummary(id)}
        className="flex-1"
      >
        <Bot className="inline w-4 h-4 mr-1" /> AI 요약
      </Button>
      <Button className="flex-1">신청하기 →</Button>
    </div>
    {showSummary && (
      <div className="mt-3 p-3 bg-gray-50 rounded-lg animate-fadeIn">
        <p className="text-sm text-brand-text-secondary">{summary}</p>
      </div>
    )}
  </div>
);

export default ScholarshipCard;
