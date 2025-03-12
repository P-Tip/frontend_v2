import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  link: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ link, icon, label }: NavItemProps) => {
  const location = useLocation();
  const isSamePath = location.pathname === link;
  // TODO: 헤더처럼 똑같이 로직 구성하기
  return (
    <Link
      to={link}
      className={`flex flex-col items-center ${isSamePath ? "text-ptu-blue" : "text-ptu-default-black"} hover:text-ptu-blue`}
    >
      {icon}
      {label}
    </Link>
  );
};

export default NavItem;
