import { NavLink } from "react-router-dom";
import routes from "../components";

const Navbar = () => {
  return (
    <ul className="bg-primary-bg h-full overflow-y-auto flex flex-col py-4 px-2">
      {routes.map((route) => (
        <NavLink to={route.path} className={({isActive}) => `px-4 py-3 font-semibold text-lg ${isActive ? "bg-theme-color text-white rounded" : "text-theme-color" }`}>
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default Navbar;
