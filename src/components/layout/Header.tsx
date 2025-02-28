import { HiOutlineBell } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="fixed w-full max-w-screen-sm z-10 flex justify-between items-center p-3 bg-white">
      <h1 className="text-xl">P-TIP</h1>
      <div className="flex space-x-1.5">
        <HiOutlineBell className="text-3xl" />
        <HiOutlineUserCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
