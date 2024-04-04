import "./styles.css";
import React, { useEffect, useState } from "react";

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
    function handleScroll() {
      // const scrollY = window.scrollY;
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      setScrollIndicatorWidth((scrollY / (scrollHeight - clientHeight)) * 100);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }
  return (
    <div className="scroll-container">
      <div className="scroll-header">
        <h1>Scroll Indicator</h1>
        <div className="scroll-indicator-container">
          <div
            className="scroll-indicator"
            style={{ width: `${scrollIndicatorWidth}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
