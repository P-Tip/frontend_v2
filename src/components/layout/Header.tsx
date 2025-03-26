import { NAV_LIST } from "@/constants";
import NavItem from "./NavItem";
import LogoIcon from "@/icons/Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 w-full z-[999] flex justify-between items-center py-6 px-3 transition-all h-24 bg-[#009b64]">
      <LogoIcon onClick={() => navigate("/scholarship")} />
      <nav className="desktop:flex space-x-1.5">
        <ul className="flex space-x-4">
          {NAV_LIST.map((link) => {
            return (
              <li key={link.path}>
                <NavItem link={link.path} label={link.label} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
