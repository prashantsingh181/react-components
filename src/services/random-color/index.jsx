import { useState } from "react";

function RandomColorGenerator() {
  const [colorType, setColorType] = useState("");
  const [randomColor, setRandomColor] = useState("");

  function generateRandomColor() {
    let randomColor = "";
    if (colorType === "hex") {
      randomColor = generateRandomHex()
    } else if (colorType === "rgb") {
      randomColor = generateRandomRgb()
    } else {
      alert("Please select a color type first.")
    }
    setRandomColor(randomColor);
  }

  function generateRandomHex() {
    let randomColor = "#";
    const hexLetters = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
      randomColor += hexLetters.charAt(Math.floor(Math.random() * hexLetters.length));
    }
    return randomColor;
  }

  function generateRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="h-full p-4 transition-colors duration-200 ease-linear" style={{ backgroundColor: randomColor }}>
      <div className="container mx-auto flex flex-col gap-8 items-center text-primary-text dark:text-primary-dark-text">
        <select className="rounded p-2 shadow-md bg-primary-bg dark:bg-primary-dark-bg cursor-pointer" value={colorType} onChange={(e) => {
          setColorType(e.target.value)
          setRandomColor("")
        }}>
          <option value="" disabled hidden>
            Choose a color format
          </option>
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
        </select>
        <button onClick={generateRandomColor} className="primary-button">Generate Random Color</button>
        <div className="flex flex-col gap-4 items-center">
          {colorType && <span className="uppercase text-3xl font-bold">{colorType} Color</span>}
          {randomColor && <span className="text-xl font-semibold">{randomColor}</span>}
        </div>
      </div>
    </div>
  )
}

export default RandomColorGenerator;