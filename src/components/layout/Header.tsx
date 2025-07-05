import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10 border-b border-gray-100/50 animate-fadeIn w-full">
      {/* TODO: px-6 뺄지 말지 고민 */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-2xl font-bold text-brand-green">
          <Link to="/">피팁</Link>
        </h1>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-text-primary hover:text-brand-green"
              }`
            }
          >
            홈
          </NavLink>
          <NavLink
            to="/scholarship"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-text-primary hover:text-brand-green"
              }`
            }
          >
            장학 프로그램
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-text-primary hover:text-brand-green"
              }`
            }
          >
            교내외 프로그램
          </NavLink>
          <NavLink
            to="/mypage"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-brand-text-primary hover:text-brand-green"
              }`
            }
          >
            마이페이지
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
