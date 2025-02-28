import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full shadow-lg">
      <Header />
      <div className="w-full pt-14 pb-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
