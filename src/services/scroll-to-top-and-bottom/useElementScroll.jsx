import { useEffect, useState } from "react";

export default function useElementScroll(querySelector, dependency) {
  const [scroll, setScroll] = useState({ scrollX: 0, scrollY: 0 });
  const [scrollableHeight, setScrollableHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  function scrollToTop() {
    document
      .querySelector(querySelector)
      .scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    document.querySelector(querySelector).scrollTo({
      top: scrollableHeight,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const targetElement = document.querySelector(querySelector);
    setScrollableHeight(targetElement.scrollHeight);
    setClientHeight(targetElement.clientHeight);
  }, [dependency, querySelector]);

  useEffect(() => {
    const targetElement = document.querySelector(querySelector);
    function handleScroll() {
      setScroll({
        scrollX: targetElement.scrollLeft,
        scrollY: targetElement.scrollTop,
      });
    }
    targetElement.addEventListener("scroll", handleScroll);
    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, [querySelector]);
  return { scroll, scrollableHeight, clientHeight, scrollToTop, scrollToBottom };
}
