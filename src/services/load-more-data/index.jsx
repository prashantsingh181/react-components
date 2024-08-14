import React, { useState, useEffect } from "react";

const LoadMoreButton = ({ url, limit }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          `${url}?limit=${limit}&skip=${limit * (page - 1)}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
        } else {
          setError(response.statusText);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    getProducts();
  }, [url, limit, page]);

  return <div className="load-more-container">
    {products.map((product, i) => <div key={i}>
        <img src={product.thumbnail}/>
        <span>{product.title}</span>
    </div>)}
    <button onClick={() => setPage(prevPage => prevPage + 1)}>LoadMoreData</button>
  </div>;
};

export default LoadMoreButton;
