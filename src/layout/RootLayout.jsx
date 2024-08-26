import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const RootLayout = () => {
  const location = useLocation();
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  function toggleMobileNav() {
    setIsMobileNavVisible((prevIsVisible) => !prevIsVisible);
  }
  useEffect(() => {
    setIsMobileNavVisible(false);
  }, [location])

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] grid-rows-[minmax(40px,auto)_1fr] relative">
      {/* Header */}
      <div className="col-span-full shadow-xl relative z-50">
        <Header toggleMobileNav={toggleMobileNav} />
      </div>
      {/* Desktop Navbar */}
      <div className="shadow-xl overflow-y-auto font-secondary relative z-40 hidden md:block">
        <Navbar />
      </div>
      {/* transparent black screen to complement mobile nav */}
      {isMobileNavVisible && <div className="absolute h-screen w-screen z-10 bg-black bg-opacity-70 md:hidden pt-[60px] overflow-auto" onClick={() => setIsMobileNavVisible(false)} />}
      {/* Mobile Navbar */}
      <div className={`w-[260px] overflow-auto absolute top-0 left-0 z-20 pt-[60px] h-full transition duration-300 ease ${isMobileNavVisible ? "translate-x-0" : "-translate-x-full"}`}>
        <Navbar />
      </div>
      {/* Main section */}
      <main className="overflow-auto font-regular bg-secondary-bg dark:bg-secondary-dark-bg">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
