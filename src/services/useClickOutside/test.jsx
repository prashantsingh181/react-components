import "./styles.css";
import { useRef, useState } from "react";
import useClickOutside from ".";

const UseClickOutsideTest = () => {
  const elementRef = useRef(null);
  useClickOutside(elementRef, () => setShowDropdown(false));
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const fruitList = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <div className="container">
      <h3>Clicking outside the dropdown will close it</h3>
      <div>
        <div
          className="select"
          onClick={() =>
            setShowDropdown((prevShowDropdown) => !prevShowDropdown)
          }
        >
          {selectedOption || "Please choose an option"}
        </div>
        {showDropdown && (
          <ul ref={elementRef}>
            {fruitList.map((fruit) => (
              <li
                key={fruit}
                onClick={() => {
                  setSelectedOption(fruit);
                  setShowDropdown(false);
                }}
              >
                {fruit}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default UseClickOutsideTest;
