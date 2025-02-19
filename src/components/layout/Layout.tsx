import { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="w-full h-full bg-gray-200">
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;