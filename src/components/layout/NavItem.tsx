import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ link, icon, label }: NavItemProps) => {
  const location = useLocation();
  const isSamePath = location.pathname === link;

  return (
    <Link
      to={link}
      className={`flex flex-col items-center ${isSamePath ? "text-ptu-green" : "text-ptu-gray"} hover:text-ptu-green`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavItem;
