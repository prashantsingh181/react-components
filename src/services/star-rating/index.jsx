import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ numberOfStars = 5 }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(index) {
    setSelectedIndex(index);
  }

  function handleMouseEnter(index) {
    setHoverIndex(index);
  }

  function handleMouseLeave() {
    setHoverIndex(selectedIndex);
  }

  return (
    <div className="container mx-auto p-8 flex flex-col gap-8 items-center">
      <h2 className="text-primary-text dark:text-primary-dark-text font-semibold text-2xl">
        Please give a rating
      </h2>
      <div className="flex gap-3">
        {Array(numberOfStars)
          .fill()
          .map((_, i) => (
            <FaStar
              key={i}
              size="1.5rem"
              className={`cursor-pointer ${
                i <= hoverIndex
                  ? "text-yellow-300"
                  : "text-primary-dark-bg dark:text-primary-bg"
              }`}
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
      </div>
      {selectedIndex > -1 && (
        <p className="text-primary-text dark:text-primary-dark-text">
          You gave a {selectedIndex + 1} star rating!
        </p>
      )}
    </div>
  );
}
