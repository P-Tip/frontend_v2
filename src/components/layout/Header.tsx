import { NAV_LIST } from "@/constants";
import NavItem from "./NavItem";
import LogoIcon from "@/icons/Logo";

const Header = () => {
  return (
    <header className="fixed w-full max-w-screen-lg z-10 flex justify-between items-center py-6 px-3 bg-white border-b border-gray-200">
      <LogoIcon />
      <nav className="hidden desktop:flex space-x-1.5">
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
