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
  isLoggedIn: boolean;
}

const ScholarshipSidebar: React.FC<ScholarshipSidebarProps> = ({
  isScholarshipExpanded,
  setIsScholarshipExpanded,
  isNoticeExpanded,
  setIsNoticeExpanded,
  showSummary,
  toggleSummary,
  isLoggedIn,
}) => (
  <div className="md:col-span-1 flex flex-col gap-4">
    <ScholarshipStatus
      isExpanded={isScholarshipExpanded}
      isLoggedIn={isLoggedIn}
      setIsExpanded={setIsScholarshipExpanded}
    />
    <SchoolNotice
      isExpanded={isNoticeExpanded}
      setIsExpanded={setIsNoticeExpanded}
      showSummary={showSummary}
      toggleSummary={toggleSummary}
    />
  </div>
);

export default ScholarshipSidebar;
