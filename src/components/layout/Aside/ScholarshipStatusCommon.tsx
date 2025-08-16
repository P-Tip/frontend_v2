import React from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  ClipboardList,
  CheckCircle,
} from "lucide-react";

// 공통 헤더 컴포넌트
export const ScholarshipStatusHeader: React.FC<{
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
}> = ({ isExpanded, setIsExpanded }) => (
  <div className="flex justify-between items-center mb-4">
    <div className="text-xl font-bold text-brand-text-primary">장학금 현황</div>
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden p-1"
      >
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>
    </div>
  </div>
);

// 공통 통계 카드 컴포넌트
export const StatisticsCards: React.FC<{
  isLoggedIn: boolean;
}> = ({ isLoggedIn }) => (
  <div className="grid grid-cols-3 gap-3">
    <div className="text-center bg-red-50 rounded-xl p-3">
      <div className="flex items-start gap-4">
        <div>
          <Heart className="text-red-500 w-4 h-4 mb-2 fill-red-500" />
        </div>
        <div className="text-xs text-brand-text-secondary">좋아요</div>
      </div>
      <div className="text-xl font-bold text-brand-text-primary mb-1 text-left">
        {isLoggedIn ? "5 건" : "- 건"}
      </div>
    </div>
    <div className="text-center bg-blue-50 rounded-xl p-3">
      <div className="flex items-start gap-4">
        <div>
          <ClipboardList className="text-blue-500 w-4 h-4 mb-2" />
        </div>
        <div className="text-xs text-brand-text-secondary">진행중</div>
      </div>
      <div className="text-xl font-bold text-brand-text-primary mb-1 text-left">
        {isLoggedIn ? "1 건" : "- 건"}
      </div>
    </div>
    <div className="text-center bg-purple-50 rounded-xl p-3">
      <div className="flex items-start gap-4">
        <div>
          <CheckCircle className="text-purple-500 w-4 h-4 mb-2" />
        </div>
        <div className="text-xs text-brand-text-secondary">완료</div>
      </div>
      <div className="text-xl font-bold text-brand-text-primary mb-1 text-left">
        {isLoggedIn ? "4 건" : "- 건"}
      </div>
    </div>
  </div>
);
