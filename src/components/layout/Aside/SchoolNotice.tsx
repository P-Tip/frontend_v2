import { Calendar, Bot, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date";
import { NOTICE_LIST } from "@/constants";

interface Notice {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface SchoolNoticeProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
  showSummary: { [key: string]: boolean };
  toggleSummary: (id: string) => void;
}

const SchoolNotice: React.FC<SchoolNoticeProps> = ({
  isExpanded,
  setIsExpanded,
  showSummary,
  toggleSummary,
}) => (
  <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-brand-text-primary">학교 공지</h3>
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
    <div className={`space-y-4 ${isExpanded ? "block" : "hidden md:block"}`}>
      {NOTICE_LIST.map((notice) => (
        <Card
          key={notice.id}
          className="p-4 mb-2 border border-gray-100 bg-gray-50/60 shadow-none"
        >
          <h4 className="text-base font-bold text-brand-text-primary mb-3">
            {notice.title}
          </h4>
          <div className="flex gap-2 justify-between">
            <div className="flex items-center gap-2">
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
);

export default SchoolNotice;
