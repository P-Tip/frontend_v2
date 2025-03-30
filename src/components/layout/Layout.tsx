import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { RESPONSIVE_BREAKPOINT } from "@/constants";
import { useKeywordStore } from "@/stores/keyword";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isDesktop = useMediaQuery(
    `(min-width: ${RESPONSIVE_BREAKPOINT.desktop}px)`,
  );
  const { keyword } = useKeywordStore();
  const mainHeight = keyword ? "h-[calc(100vh-100px)]" : "h-full";

  return (
    <>
      <Header />
      {/* TODO: 임시 해결 방법 헤더 높이를 좀 잘 계산하면 문제없을 듯하다. */}
      <main
        className={`w-full sm:w-full ${mainHeight} bg-white rounded-t-3xl z-20`}
      >
        {children}
      </main>
      <Toaster position="bottom-center" duration={2000} />
      {/* {!isDesktop && <Footer />} */}
    </>
  );
};

export default Layout;
