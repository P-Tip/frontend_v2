import { PiggyBank } from "lucide-react";
import ScholarshipCardLoggedOut from "./left-aside-logged-out";
import {
  ScholarshipStatusHeader,
  StatisticsCards,
} from "./ScholarshipStatusCommon";

interface ScholarshipStatusProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
  isLoggedIn: boolean;
}

const ScholarshipStatus: React.FC<ScholarshipStatusProps> = ({
  isExpanded,
  setIsExpanded,
  isLoggedIn,
}) => {
  // 로그인하지 않은 경우 ScholarshipCardLoggedOut 컴포넌트 렌더링
  if (!isLoggedIn) {
    return (
      <ScholarshipCardLoggedOut
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    );
  }

  // 로그인한 경우 기존 컴포넌트 렌더링
  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <ScholarshipStatusHeader
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

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
        <StatisticsCards isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};

export default ScholarshipStatus;
