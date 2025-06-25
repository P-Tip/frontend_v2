import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoHome } from "react-icons/io5";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi2";
import { HiBuildingOffice2, HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Footer = () => {
  const navItems = [
    {
      path: "/",
      label: "홈",
      iconOutline: <IoHomeOutline className="w-5 h-5" />,
      iconFilled: <IoHome className="w-5 h-5" />,
    },
    {
      path: "/scholarship",
      label: "장학금",
      iconOutline: <HiOutlineAcademicCap className="w-5 h-5" />,
      iconFilled: <HiAcademicCap className="w-5 h-5" />,
    },
    {
      path: "/program",
      label: "프로그램",
      iconOutline: <HiOutlineBuildingOffice2 className="w-5 h-5" />,
      iconFilled: <HiBuildingOffice2 className="w-5 h-5" />,
    },
    {
      path: "/mypage",
      label: "MY",
      iconOutline: <IoPersonOutline className="w-5 h-5" />,
      iconFilled: <IoPerson className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-brand-surface border-t border-brand-border z-50 animate-fadeIn">
      <div className="max-w-screen-lg mx-auto">
        <nav className="flex justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-2 px-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isActive
                    ? "text-brand-green"
                    : "text-brand-text-secondary hover:text-brand-text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="mb-1">
                    {isActive ? item.iconFilled : item.iconOutline}
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
