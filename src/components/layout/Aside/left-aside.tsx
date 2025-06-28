import { NavLink } from "react-router-dom";
import {
  PiggyBank,
  Heart,
  ClipboardList,
  CheckCircle,
  Calendar,
  Bot,
  MapPin,
  Building,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sidebar component for 장학금 현황 및 공지사항
interface ScholarshipSidebarProps {
  isScholarshipExpanded: boolean;
  setIsScholarshipExpanded: (v: boolean) => void;
  isNoticeExpanded: boolean;
  setIsNoticeExpanded: (v: boolean) => void;
  noticeList: any[];
  showSummary: { [key: string]: boolean };
  toggleSummary: (id: string) => void;
  formatDate: (dateString: string) => string;
}

const ScholarshipSidebar: React.FC<ScholarshipSidebarProps> = ({
  isScholarshipExpanded,
  setIsScholarshipExpanded,
  isNoticeExpanded,
  setIsNoticeExpanded,
  noticeList,
  showSummary,
  toggleSummary,
  formatDate,
}) => (
  <div className="md:col-span-1 flex flex-col gap-4">
    {/* 장학금 진행 상태 카드 */}
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-brand-text-primary">
          장학금 현황
        </h2>
        <button
          onClick={() => setIsScholarshipExpanded(!isScholarshipExpanded)}
          className="md:hidden text-brand-green hover:text-brand-green-dark transition-colors"
        >
          {isScholarshipExpanded ? "접기" : "펼치기"}
        </button>
      </div>
      <div
        className={`space-y-4 ${isScholarshipExpanded ? "block" : "hidden md:block"}`}
      >
        {/* 장학금 금액 카드 */}
        <div className="bg-green-50 rounded-2xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <PiggyBank className="text-brand-green w-5 h-5" />
            <span className="text-sm text-brand-text-secondary">
              총 장학금액
            </span>
          </div>
          <p className="text-2xl font-bold text-brand-green">450,000 원</p>
        </div>
        {/* 통계 카드들 */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <Heart className="text-red-500 w-7 h-7 mb-2 fill-red-500" />
            <p className="text-xl font-bold text-brand-text-primary mb-1">
              5 건
            </p>
            <p className="text-xs text-brand-text-secondary">좋아요</p>
          </div>
          <div className="text-center">
            <ClipboardList className="text-blue-500 w-7 h-7 mb-2" />
            <p className="text-xl font-bold text-brand-text-primary mb-1">
              1 건
            </p>
            <p className="text-xs text-brand-text-secondary">진행중</p>
          </div>
          <div className="text-center">
            <CheckCircle className="text-green-500 w-7 h-7 mb-2" />
            <p className="text-xl font-bold text-brand-text-primary mb-1">
              4 건
            </p>
            <p className="text-xs text-brand-text-secondary">완료</p>
          </div>
        </div>
      </div>
    </div>
    {/* 학교 공지 카드 */}
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-brand-text-primary">학교 공지</h3>
        <button
          onClick={() => setIsNoticeExpanded(!isNoticeExpanded)}
          className="md:hidden text-brand-green hover:text-brand-green-dark transition-colors"
        >
          {isNoticeExpanded ? "접기" : "펼치기"}
        </button>
      </div>
      <div
        className={`space-y-4 ${isNoticeExpanded ? "block" : "hidden md:block"}`}
      >
        {noticeList.map((notice) => (
          <Card
            key={notice.id}
            className="p-4 mb-2 border border-gray-100 bg-gray-50/60 shadow-none"
          >
            <h4 className="text-base font-bold text-brand-text-primary mb-3">
              {notice.title}
            </h4>
            <div className="flex gap-2 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-brand-text-secondary flex items-center gap-1">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    {formatDate(notice.date)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex items-center gap-1 px-3 py-1 text-xs font-medium"
                  onClick={() => toggleSummary(notice.id)}
                >
                  <Bot className="inline w-4 h-4 mr-1" /> AI 요약
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="px-3 py-1 text-xs font-medium border-green-200 text-brand-green bg-green-50 hover:bg-green-100"
                >
                  상세보기
                </Button>
              </div>
            </div>
            {showSummary[notice.id] && (
              <div className="mt-2 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                <p className="text-xs text-brand-text-secondary">
                  {notice.summary}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default ScholarshipSidebar;
