import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "홈" },
    { path: "/scholarship", label: "장학금" },
  ];

  return (
    <div className="fixed w-full max-w-screen-lg z-10 flex justify-between items-center py-6 px-3 bg-white border-b border-gray-200">
      <h1 className="text-xl">P-TIP</h1>
      <div className="flex space-x-1.5">
        <ul className="flex space-x-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`
                    text-sm py-3 px-4 rounded-xl cursor-pointer
                    transition-all duration-300 ease-in-out
                    ${
                      isActive
                        ? "text-ptu-blue bg-ptu-blue-bg hover:bg-ptu-blue-bg-hover"
                        : "text-ptu-default-black hover:bg-gray-100 hover:text-ptu-default-black"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
