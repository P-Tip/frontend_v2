import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { RESPONSIVE_BREAKPOINT } from "@/constants";
import { useKeywordStore } from "@/stores/keyword";
import { useLocation, NavLink } from "react-router-dom";
import useAnalytics from "@/hooks/useAnalytics";
import ScholarshipCard from "../scholarship/ScholarshipCard";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  useAnalytics(location);
  const isDesktop = useMediaQuery(
    `(min-width: ${RESPONSIVE_BREAKPOINT.desktop}px)`,
  );
  const isMobile = useMediaQuery("(max-width: 959px)");
  const { keyword } = useKeywordStore();
  const mainHeight = keyword ? "h-[calc(100vh-96px)]" : "h-full";

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* 상단 알림 배너 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 w-full">
        <div className="max-w-[1200px] mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-brand-text-primary font-medium">
                📢 [공지] 5월 업데이트: 새로운 장학금 항목 기능이 추가되었습니다
              </span>
            </div>
            <Button variant="ghost" size="icon">
              →
            </Button>
          </div>
        </div>
      </div>

      <Header />

      <main className={`bg-transparent ${isMobile ? "pb-20" : "pb-8"}`}>
        {children}
      </main>

      {isMobile && <Footer />}
    </div>
  );
};

export default Layout;
