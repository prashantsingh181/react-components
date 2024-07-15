import { FaReact } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({ toggleMobileNav }) => {
  return (
    <header className="bg-primary-bg dark:bg-primary-dark-bg text-theme-color font-primary font-semibold text-lg sm:text-2xl px-4 md:px-8 py-4 flex items-center gap-4 justify-between">
      <Link to="/" className="flex gap-2 items-center">
        <FaReact className="animate-spin-slow" />
        <h1>React Components</h1>
      </Link>
      <RxHamburgerMenu className="inline md:hidden cursor-pointer" onClick={toggleMobileNav} />
    </header>
  );
};

export default Header;
