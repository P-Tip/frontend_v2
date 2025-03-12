import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full shadow-lg">
      <Header />
      <div className="w-full pt-24">{children}</div>
      <Toaster />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
