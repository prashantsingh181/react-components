import { NavLink } from "react-router-dom";
import routes from "../services";

const Navbar = () => {
  return (
    <ul className="bg-primary-bg dark:bg-primary-dark-bg h-full overflow-y-auto flex flex-col py-4 px-2 no-scrollbar">
      {routes.map((route) => (
        <NavLink key={route.path} to={route.path} className={({ isActive }) => `px-4 py-3 font-semibold text-base sm:text-lg ${isActive ? "bg-theme-color text-white rounded" : "text-theme-color"}`}>
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Navbar;
