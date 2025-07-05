import React from "react";
import { Button } from "@/components/ui/button";

const ScholarshipCardLoggedOut: React.FC = () => {
  return (
    <div className="w-full rounded-2xl shadow-md bg-white p-4 flex flex-col justify-between">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900">장학금 현황</h2>

      {/* 로그인 후 확인 영역 */}
      <div className="w-full h-[72px] bg-green-50 rounded-md flex items-center justify-center mt-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🔒</span>
          <span className="text-green-700 text-sm">
            로그인 후 확인할 수 있어요
          </span>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex justify-between mt-4 text-gray-400 text-sm">
        <div className="flex items-center space-x-1">
          <span>❤️</span>
          <span>-건</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>📋</span>
          <span>-건</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>✅</span>
          <span>-건</span>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <Button className="w-full mt-4">로그인 하러가기</Button>
    </div>
  );
};

export default ScholarshipCardLoggedOut;
