import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setErrorMessage(null);
        } else {
          setErrorMessage(response.statusText);
          console.error(response.statusText);
        }
      } catch (error) {
        setErrorMessage(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, options]);
  return { data, loading, errorMessage };
}
