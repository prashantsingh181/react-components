import { useState } from "react";
import "./styles.css";
const RandomColor = () => {
  const [colorType, setColorType] = useState("");
  const [color, setColor] = useState();
  const heading = {
    hex: "HEX Color",
    rgb: "RGB Color",
  };
  const hex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  function generateRandomHexColor() {
    if (colorType === "") {
      alert("Please select a format first!");
    } else {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
      }
      setColor(hexColor);
    }
  }
  function generateRandomRgbColor() {
    if (colorType === "") {
      alert("Please select a format first!");
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    }
  }
  function handleFormatChange(e) {
    setColor("");
    setColorType(e.target.value);
  }
  return (
    <div className="wrapper" style={{ backgroundColor: color }}>
      <div className="selectors">
        <select value={colorType} onChange={handleFormatChange}>
          <option value="" disabled hidden>
            Choose a format
          </option>
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
        </select>
        <button
          onClick={
            colorType === "hex"
              ? generateRandomHexColor
              : generateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="color" style={{ opacity: "50%" }}>
        <h3>{heading[colorType]}</h3>
        <h4>{color}</h4>
      </div>
    </div>
  );
};

export default RandomColor;
