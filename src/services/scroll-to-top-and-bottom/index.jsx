import "./styles.css";
import useFetch from "../useFetch";
import useWindowScroll from "./useWindowScroll";

const ScrollToTopAndBottom = () => {
  const { _, scrollY } = useWindowScroll();
  console.log(scrollY);
  console.log(window.scoll);
  const { data, errorMessage, loading } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="scroll-container">
      <h1>Scroll To Top and Bottom Feature</h1>
      {scrollY > 0 && (
        <button
          className="scroll-btn scroll-to-top"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <i className="bi bi-arrow-up-square-fill"></i>
        </button>
      )}
      {(scrollY + window.innerHeight < document.body.scrollHeight ||
        scrollY === 0) && (
        <button
          className="scroll-btn scroll-to-bottom"
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <i className="bi bi-arrow-down-square-fill"></i>
        </button>
      )}
      <ul>
        {data?.products &&
          data.products.length &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
};

export default ScrollToTopAndBottom;
