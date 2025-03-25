import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { RESPONSIVE_BREAKPOINT } from "@/constants";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isDesktop = useMediaQuery(
    `(min-width: ${RESPONSIVE_BREAKPOINT.desktop}px)`,
  );

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full pt-24 h-full">
        <main className="w-full h-full bg-white rounded-t-3xl">{children}</main>
      </div>
      <Toaster />
      {/* {!isDesktop && <Footer />} */}
    </div>
  );
};

export default Layout;
