import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  link: string;
  label: string;
}

const NavItem = ({ link, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <div className="relative">
      <Link
        to={link}
        className={`
        text-sm py-3 px-4 rounded-xl cursor-pointer
        transition-all duration-300 ease-in-out
        ${
          isActive
            ? "text-ptu-blue bg-ptu-blue-bg hover:bg-ptu-blue-bg-hover"
            : "text-ptu-default-black hover:bg-gray-100 hover:text-ptu-default-black"
        } 
      `}
      >
        {label}
      </Link>
      <div
        className={`w-10 h-10 absolute top-12 left-1/2 -translate-x-1/2 rounded-full bg-ptu-gray ${isActive ? "block" : "hidden"}`}
      ></div>
    </div>
  );
};

export default NavItem;
