import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { RESPONSIVE_BREAKPOINT } from "@/constants";
import { useKeywordStore } from "@/stores/keyword";
import { useLocation } from "react-router-dom";
import useAnalytics from "@/hooks/useAnalytics";
import ScholarshipCard from "../scholarship/ScholarshipCard";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  useAnalytics(location);
  const isDesktop = useMediaQuery(
    `(min-width: ${RESPONSIVE_BREAKPOINT.desktop}px)`,
  );
  const { keyword } = useKeywordStore();
  const mainHeight = keyword ? "h-[calc(100vh-96px)]" : "h-full";

  return (
    <>
      <Header />
      {/* TODO: 임시 해결 방법 헤더 높이를 좀 잘 계산하면 문제없을 듯하다. */}
      {/* TODO: 너비 임시방편으로 해결 */}
      <main
        className={`w-full sm:w-[99%] min-h-[calc(100vh-96px)] h-full bg-white rounded-t-3xl z-20`}
      >
        {children}
      </main>
      <Toaster position="bottom-center" duration={2000} />
      {/* {!isDesktop && <Footer />} */}
    </>
  );
};

export default Layout;
