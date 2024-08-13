import data from "./data";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import ToggleSwitch from "../../components/ToggleSwitch";

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
        <ToggleSwitch
          value={enableMultiSelection}
          leftText="Single Selection"
          rightText="Multiple Selection"
          onClick={toggleSelectionMode}
        />
      </div>
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
                  tabIndex="0"
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelection(item.id);
                    }
                  }}
                  className={`flex justify-between px-4 py-3 gap-1 rounded cursor-pointer items-center transition-color duration-300 ${
                    isSelected
                      ? "bg-theme-color text-primary-bg"
                      : "bg-primary-bg dark:bg-primary-dark-bg"
                  }`}
                  onClick={() => handleSelection(item.id)}
                >
                  <span>{item.question}</span>
                  <div>{isSelected ? <FaMinus /> : <FaPlus />}</div>
                </div>
                <div
                  className={`px-4 duration-300 grid transition-[grid-template-rows] ${
                    isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="py-2">{item.answer}</div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
