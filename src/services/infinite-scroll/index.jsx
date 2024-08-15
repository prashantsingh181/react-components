import { useEffect, useState, useCallback, useRef } from "react";
import SpinnerLoader from "../../components/spinnerLoader/SpinnerLoader";
import ProductCard from "../../components/ProductCard";

export default function InfiniteScroll({
  url = "https://dummyjson.com/products",
  limit = 50,
}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // First Approach:
  // const handleScroll = useCallback((e) => {
  //   const { scrollTop, clientHeight, scrollHeight } = e.target;
  //   console.log(isLoading)
  //   if ((scrollTop + clientHeight >= scrollHeight) && !isLoading && hasMore) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // }, [isLoading, hasMore])

  // useEffect(() => {
  //   const main = document.querySelector("main");

  //   main.addEventListener("scroll", handleScroll);

  //   return () => {
  //     main.removeEventListener("scroll", handleScroll);
  //   };
  // }, [handleScroll]);

  // Second Approach:
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(
        `${url}?limit=${limit}&skip=${limit * (page - 1)}`
      );
      if (response.ok) {
        const responseData = await response.json();
        setData((prevData) => [...prevData, ...responseData.products]);
        setHasMore(responseData.products.length >= limit);
      } else {
        setError(response.statusText);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [limit, page, url]);

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  return (
    <div className="container mx-auto p-2 md:p-4">
      <h1 className="text-xl font-bold text-theme-color text-center p-4">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div ref={lastElementRef}>{isLoading && <SpinnerLoader />}</div>
      {error && <div> error</div>}
    </div>
  );
}
