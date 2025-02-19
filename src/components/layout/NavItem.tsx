import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({link, icon, label}: NavItemProps) => {
  const location = useLocation();
  const isSamePath = location.pathname === link;

  return (
    <Link to={link} className={`flex flex-col items-center ${isSamePath ? "text-[#009b64]" : "text-[#CDCDCD]"} hover:text-[#009b64]`}>
      {icon}
      {label}
    </Link>
  )
}

export default NavItem;