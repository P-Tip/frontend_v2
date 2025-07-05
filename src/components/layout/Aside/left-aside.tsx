import ScholarshipStatus from "./ScholarshipStatus";
import SchoolNotice from "./SchoolNotice";

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
    <ScholarshipStatus
      isExpanded={isScholarshipExpanded}
      setIsExpanded={setIsScholarshipExpanded}
    />
    <SchoolNotice
      isExpanded={isNoticeExpanded}
      setIsExpanded={setIsNoticeExpanded}
      noticeList={noticeList}
      showSummary={showSummary}
      toggleSummary={toggleSummary}
      formatDate={formatDate}
    />
  </div>
);

export default ScholarshipSidebar;
