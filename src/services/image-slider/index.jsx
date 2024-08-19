import { useState, useEffect } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import ProgressLoader from "../../components/progressLoader/ProgressLoader";

export default function ImageSlider({ url, page = 1, limit = 5 }) {
  const [imagesData, setImagesData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function getImagesData() {
      setLoading(true);
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        if (response.ok) {
          const data = await response.json();
          setImagesData(data);
        } else {
          setError(response.statusText);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImagesData();
  }, [url, limit, page]);

  function incrementCurrentIndex() {
    if (currentIndex === imagesData.length - 1) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  }

  function decrementCurrentIndex() {
    if (currentIndex === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length
    );
  }

  if (loading) {
    return <ProgressLoader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-10 items-center p-2 sm:p-6 h-full">
      <h1 className="text-theme-color font-bold text-center text-xl p-4">
        Image Slider
      </h1>
      <div className="relative w-[600px] overflow-hidden h-80 shadow-md">
        <IoMdArrowDropleftCircle
          size="1.5rem"
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow cursor-pointer ${
            currentIndex === 0
              ? "text-gray-400"
              : "text-white hover:scale-110 transition duration-200 ease-linear"
          }`}
          onClick={decrementCurrentIndex}
        />

        <IoMdArrowDroprightCircle
          size="1.5rem"
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow cursor-pointer ${
            currentIndex === imagesData.length - 1
              ? "text-gray-400"
              : "text-white hover:scale-110 transition duration-200 ease-linear"
          }`}
          onClick={incrementCurrentIndex}
        />

        {imagesData.map((image, index) => (
          <div
            key={image.id}
            style={{
              backgroundImage: `url(${image.download_url})`,
              left: `${index * 100}%`,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className="w-full h-full absolute bg-cover rounded-lg transition duration-700 ease-linear"
            alt="image of image slider"
          />
        ))}
        <div className="flex gap-2 absolute z-10 bottom-4 left-1/2 -translate-x-1/2">
          {imagesData.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 aspect-square rounded-full ${
                currentIndex === index
                  ? "bg-white scale-110"
                  : "bg-gray-400 hover:scale-110 hover:bg-white"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
