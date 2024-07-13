import "./styles.css";
import { useState } from "react";
export default function StarRating({ noOfStars = 5 }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleMouseEnter(index) {
    setHoverIndex(index);
  }
  function handleMouseLeave() {
    setHoverIndex(selectedIndex);
  }
  function handleClick(index) {
    setSelectedIndex(index);
  }

  return (
    <div className="star-wrapper">
      {[...Array(noOfStars)].map((_, i) => (
        <div
          key={i}
          className={`star ${
            i <= (hoverIndex ?? selectedIndex) ? "active" : "inactive"
          }`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        ></div>
      ))}
    </div>
  );
}
