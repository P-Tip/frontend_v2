import React from "react";
import { Button } from "@/components/ui/button";
import { Lock, Heart, ClipboardList, CheckCircle } from "lucide-react";

const ScholarshipCardLoggedOut: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold text-brand-text-primary">
          장학금 현황
        </div>
        <div className="flex items-center gap-2">
          <div>2025-1학기</div>
        </div>
      </div>

      <div className="space-y-4">
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
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center bg-red-50 rounded-xl p-3">
            <div className="flex items-start gap-4">
              <div>
                <Heart className="text-red-500 w-4 h-4 mb-2 fill-red-500" />
              </div>
              <div className="text-xs text-brand-text-secondary">좋아요</div>
            </div>
            <div className="text-xl font-bold text-brand-text-primary mb-1 text-left">
              - 건
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
              - 건
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
              - 건
            </div>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <Button className="w-full mt-2">로그인 하러가기</Button>
      </div>
    </div>
  );
};

export default ScholarshipCardLoggedOut;
