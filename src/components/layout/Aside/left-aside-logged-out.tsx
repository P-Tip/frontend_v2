import React from "react";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import {
  ScholarshipStatusHeader,
  StatisticsCards,
} from "./ScholarshipStatusCommon";

interface ScholarshipCardLoggedOutProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
}

const ScholarshipCardLoggedOut: React.FC<ScholarshipCardLoggedOutProps> = ({
  isExpanded,
  setIsExpanded,
}) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <ScholarshipStatusHeader
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <div className={`space-y-4 ${isExpanded ? "block" : "hidden md:block"}`}>
        {/* 로그인 후 확인 영역 */}
        <div className="bg-green-50 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Lock className="text-brand-green w-5 h-5" />
            <span className="text-sm text-brand-text-secondary">
              로그인 필요
            </span>
          </div>
          <p className="text-lg text-brand-text-primary font-medium">
            로그인 후 확인할 수 있어요
          </p>
        </div>

        {/* 통계 카드들 */}
        <StatisticsCards isLoggedIn={false} />

        {/* 로그인 버튼 */}
        <Button className="w-full mt-2">로그인 하러가기</Button>
      </div>
    </div>
  );
};

export default ScholarshipCardLoggedOut;
