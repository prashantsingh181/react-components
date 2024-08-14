import React, { useEffect, useState } from "react";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";

export default function ScrollIndicator({ url }) {
  const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    const element = document.querySelector("main");
    function handleScroll() {
      const scrollY = element.scrollTop;
      const scrollContainerClientHeight = element.clientHeight;
      const scrollContainerScrollHeight = element.scrollHeight;
      setScrollIndicatorWidth(
        (scrollY /
          (scrollContainerScrollHeight - scrollContainerClientHeight)) *
          100
      );
    }
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return <ProgressLoader />;
  }
  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }
  return (
    <div className="relative">
      <div className="h-1 sticky top-0 w-full">
        <div
          className="bg-theme-color h-1"
          style={{ width: `${scrollIndicatorWidth}%` }}
        ></div>
      </div>
      <div className="flex flex-col gap-2 text-primary-text dark:text-primary-dark-text p-6">
        <h1 className="text-theme-color font-bold text-center text-xl">
          Scroll Indicator
        </h1>
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
