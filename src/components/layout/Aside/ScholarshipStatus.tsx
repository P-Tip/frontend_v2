import {
  PiggyBank,
  Heart,
  ClipboardList,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScholarshipStatusProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
}

const ScholarshipStatus: React.FC<ScholarshipStatusProps> = ({
  isExpanded,
  setIsExpanded,
}) => (
  <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
    <div className="flex justify-between items-center mb-4">
      <div className="text-xl font-bold text-brand-text-primary">
        장학금 현황
      </div>
      <div className="flex items-center gap-2">
        <div>2025-1학기</div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden"
        >
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
    <div className={`space-y-4 ${isExpanded ? "block" : "hidden md:block"}`}>
      {/* 장학금 금액 카드 */}
      <div className="bg-green-50 rounded-2xl p-4">
        <div className="flex items-center space-x-2 mb-2">
          <PiggyBank className="text-brand-green w-5 h-5" />
          <span className="text-sm text-brand-text-secondary">장학금</span>
        </div>
        <p className="text-2xl font-bold text-brand-green">450,000 원</p>
      </div>
      {/* 통계 카드들 */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center bg-red-50 rounded-xl p-3">
          <div className="flex items-start gap-4">
            <div>
              <Heart className="text-red-500 w-4 h-4 mb-2 fill-red-500" />
            </div>
            <div className="text-xs text-brand-text-secondary">좋아요</div>
          </div>
          <div className="text-xl font-bold text-brand-text-primary mb-1 text-left">
            5 건
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
            1 건
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
            4 건
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ScholarshipStatus;
