import { useLayoutEffect, useState } from "react";

export default function useWindowScroll() {
  const [scroll, setScroll] = useState({ scrollX: 0, scrollY: 0 });
  useLayoutEffect(() => {
    function handleScroll() {
      setScroll({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scroll;
}
