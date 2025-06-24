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
            ? "text-brand-green border-b-2 border-brand-green"
            : "text-brand-text-secondary hover:bg-gray-100 hover:text-brand-text-primary"
        } 
      `}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavItem;
