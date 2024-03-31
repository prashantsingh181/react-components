import "./styles.css";
import React, { useState, useEffect } from "react";
export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    async function getImages(url, page, limit) {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImages(url, page, limit);
  }, []);

  function handleCounterIncrement() {
    setCurrentImageIndex((prevCurrentImageIndex) => {
      if (prevCurrentImageIndex >= images.length - 1) {
        return 0;
      } else {
        return prevCurrentImageIndex + 1;
      }
    });
  }

  function handleCounterDecrement() {
    setCurrentImageIndex((prevCurrentImageIndex) => {
      if (prevCurrentImageIndex <= 0) {
        return images.length - 1;
      } else {
        return prevCurrentImageIndex - 1;
      }
    });
  }
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    if (errorMessage) {
      return <h1>{errorMessage}</h1>;
    } else {
      return (
        <div className="image-wrapper">
          {images &&
            images.map(
              (image, i) =>
                i === currentImageIndex && (
                  <img
                    className="image"
                    key={image.id}
                    src={image.download_url}
                  />
                )
            )}
            {images.map((_, i) => (<button onClick={() => setCurrentImageIndex(i)}></button>))}
          <button onClick={handleCounterDecrement}>&lt;-</button>
          <button onClick={handleCounterIncrement}>-&gt;</button>
        </div>
      );
    }
  }
}
