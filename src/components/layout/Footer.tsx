import { IoHomeOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import NavItem from "./NavItem";

const Footer = () => {
  return (
    <div className="fixed w-full max-w-screen-sm bottom-0	flex justify-around py-1.5 bg-slate-50">
      <NavItem link="/" icon={<IoHomeOutline className="text-2xl mb-0.5" />} label="홈" />
      <NavItem link="/scholarship" icon={<IoSchoolOutline className="text-2xl mb-0.5" />} label="장학금" />
      <NavItem link="/timetable" icon={<IoTimeOutline className="text-2xl mb-0.5" />} label="시간표" />
      <NavItem link="/todo" icon={<LuListTodo className="text-2xl mb-0.5" />} label="할 일" />
    </div>
  );
}

export default Footer;