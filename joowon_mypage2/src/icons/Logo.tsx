import Logo from "@/assets/logo.svg?react";

interface LogoIconProps {
  onClick?: () => void;
}

const LogoIcon = ({ onClick }: LogoIconProps) => {
  return <Logo onClick={onClick} style={{ cursor: "pointer" }} />;
};

export default LogoIcon;
