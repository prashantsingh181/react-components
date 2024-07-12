import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-primary-bg text-theme-color font-primary font-semibold text-2xl px-8 py-4 flex items-center gap-2">
      <FaReact className="animate-spin-slow" />
      <h1 className="">React Components</h1>
    </header>
  );
};

export default Header;
