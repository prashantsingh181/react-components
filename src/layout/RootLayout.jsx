import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[300px_1fr] grid-rows-[minmax(40px,auto)_1fr] relative">
      <div className="col-span-full shadow-xl border border-primary-border dark:border-primary-dark-border relative z-50">
        <Header />
      </div>
      <div className="shadow-xl border border-primary-border dark:border-primary-dark-border border-t-0 overflow-y-auto font-secondary relative z-40">
        <Navbar />
      </div>
      <main className="overflow-auto font-regular bg-secondary-bg dark:bg-secondary-dark-bg">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
