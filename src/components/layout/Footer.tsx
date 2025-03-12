import { IoHomeOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import NavItem from "./NavItem";
import { NAV_LIST } from "@/constants";

const Footer = () => {
  return (
    <div className="fixed w-full bottom-0	flex justify-around py-1.5 bg-slate-50">
      {NAV_LIST.map((nav) => (
        <NavItem
          key={nav.path}
          link={nav.path}
          icon={nav.icon}
          label={nav.label}
        />
      ))}
    </div>
  );
};

export default Footer;
