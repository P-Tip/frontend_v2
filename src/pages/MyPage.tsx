import { MypagePointProgress } from "@/components/common/PointProgress";
import { ScholarshipCard } from "@/components/scholarship/ScholarshipCard";
import { Button } from "@/components/ui/button";
import { IScholarship } from "@/types/scholarship";
import { useEffect, useState } from "react";
import { calculateTotalPoints } from "@/utils";
import { SCHOLARSHIP_DATA } from "@/constants";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoNotificationsOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { getGoogleOauth } from "@/services/apis/loginApi";
import ScholarshipContainer from "@/components/myPage/ScholarshipContainer";

const MyPage = () => {
  const [likedScholarships, setLikedScholarships] = useState<IScholarship[]>(
    [],
  );
  const [totalPoint, setTotalPoint] = useState(0);
  const [activeSection, setActiveSection] = useState("프로필");

  const tabItems = ["프로필", "계정관리", "활동내역", "알림설정"];

  useEffect(() => {
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );

    setLikedScholarships(scholarshipData);
    setTotalPoint(calculateTotalPoints(scholarshipData));
  }, []);

  const handleCartClick = (point: number) => {
    setTotalPoint(point);
    const scholarshipData = JSON.parse(
      localStorage.getItem(SCHOLARSHIP_DATA) || "[]",
    );
    setLikedScholarships(scholarshipData);
  };

  const renderProfileSection = () => (
    <div className="animate-fadeIn flex flex-col lg:flex-row gap-6">
      {/* 사용자 프로필 카드 */}
      <div className="w-full lg:flex-[3] bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-all duration-300">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center">
            <IoPersonOutline className="text-2xl text-white" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-16 font-bold text-brand-text-primary leading-8 text-center mt-2">
              홍길동
            </h3>
            <p className="text-brand-text-secondary font-medium">
              평택대학교 학생
            </p>
          </div>
        </div>
        <div className="border-t border-brand-border pt-6 flex flex-col gap-2">
          {/* TODO: constants 처리해서 map으로 돌리기 */}
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-brand-text-secondary font-medium mb-1">
              학번
            </div>
            <div className="text-brand-text-primary font-semibold">
              2020123456
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-brand-text-secondary font-medium mb-1">
              이메일
            </div>
            <div className="text-brand-text-primary font-semibold">
              hong@example.com
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="text-sm text-brand-text-secondary font-medium mb-1">
              가입일
            </div>
            <div className="text-brand-text-primary font-semibold">
              2020-01-01
            </div>
          </div>
        </div>
      </div>
      {/* 장학금 현황 */}
      <div className="w-full lg:flex-[7] p-6 bg-brand-surface rounded-3xl">
        <ScholarshipContainer />
      </div>
    </div>
  );

  const renderActivitySection = () => (
    <div className="space-y-6 animate-fadeIn">
      <MypagePointProgress totalPoint={totalPoint} />

      <div className="bg-brand-surface rounded-3xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-all duration-300">
        <h3 className="text-xl font-bold text-brand-text-primary mb-4 leading-7">
          관심 장학금 목록
        </h3>
        {likedScholarships.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-brand-text-secondary font-medium text-base mb-2">
              아직 관심 장학금이 없습니다.
            </p>
            <p className="text-brand-text-secondary text-sm">
              장학금 목록에서 하트를 눌러 추가해보세요!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {likedScholarships.map((scholarship) => (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
                onCartClick={(point) => handleCartClick(point)}
                searchValue=""
                onFavorite={() => {}}
                isFavorite={false}
                onSummary={() => {}}
                showSummary={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderPlaceholderSection = (title: string, icon: React.ReactNode) => (
    <div className="bg-brand-surface rounded-3xl p-12 shadow-sm border border-brand-border animate-fadeIn hover:shadow-md transition-all duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text-primary mb-3 leading-7">
          {title}
        </h3>
        <p className="text-brand-text-secondary font-medium mb-1">
          준비 중인 기능입니다.
        </p>
        <p className="text-brand-text-secondary text-sm">
          곧 업데이트될 예정입니다!
        </p>
      </div>
    </div>
  );

  return (
    <div className="px-5 pt-5 pb-5 flex flex-col gap-6 max-w-[1200px] mx-auto">
      {/* 탭 바 */}
      <div className="bg-brand-surface rounded-3xl p-2 shadow-sm border border-brand-border animate-fadeIn hover:shadow-md transition-all duration-300">
        <div className="flex space-x-2">
          {tabItems.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveSection(tab)}
              variant={activeSection === tab ? "default" : "secondary"}
              className="flex-1 py-3 px-4 rounded-2xl text-sm font-semibold transition-all duration-300"
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      {activeSection === "프로필" && renderProfileSection()}
      {activeSection === "활동내역" && renderActivitySection()}
      {activeSection === "계정관리"
        && renderPlaceholderSection(
          "계정관리",
          <IoSettingsOutline className="text-2xl text-gray-400" />,
        )}
      {activeSection === "알림설정"
        && renderPlaceholderSection(
          "알림설정",
          <IoNotificationsOutline className="text-2xl text-gray-400" />,
        )}
    </div>
  );
};

export default MyPage;
