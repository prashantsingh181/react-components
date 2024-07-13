import data from "./data";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import ToggleButton from "../../components/ToggleButton";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function toggleSelectionMode() {
    setEnableMultiSelection(
      (prevEnableMultiSelection) => !prevEnableMultiSelection
    );
    setMultipleSelected([]);
    setSelected(null);
  }

  function handleSelection(id) {
    if (enableMultiSelection) {
      setMultipleSelected((prevMultiSelected) =>
        prevMultiSelected.includes(id)
          ? prevMultiSelected.filter((itemId) => itemId !== id)
          : [...prevMultiSelected, id]
      );
    } else {
      setSelected((prevSelected) => (prevSelected === id ? null : id));
    }
  }
  return (
    <div className="container mx-auto h-full px-4 py-6 flex flex-col gap-8">
      <div className="self-center">
        <ToggleButton
          value={enableMultiSelection}
          leftText="Single Selection"
          rightText="Multiple Selection"
          onClick={toggleSelectionMode}
        />
      </div>
      {/* <button
        className="primary-button self-center"
        onClick={toggleSelectionMode}
      >
        {enableMultiSelection
          ? "Enable Single Selection"
          : "Enable Multiple Selection"}
      </button> */}
      <ul className="text-primary-text dark:text-primary-dark-text flex flex-col gap-4">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            const isSelected = enableMultiSelection
              ? multipleSelected.includes(item.id)
              : item.id === selected;
            return (
              <li className="card" key={item.id}>
                <div
                  className={`flex justify-between px-4 py-3 rounded cursor-pointer ${
                    isSelected
                      ? "bg-theme-color text-primary-bg"
                      : "bg-primary-bg dark:bg-primary-dark-bg"
                  }`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span>{item.question}</span>
                  {isSelected ? <FaMinus /> : <FaPlus />}
                </div>
                {isSelected && <div className="px-4 py-2 animate-fade-in">{item.answer}</div>}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
