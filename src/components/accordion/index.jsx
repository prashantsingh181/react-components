import "./styles.css";
import data from "./data";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [isMultipleSelection, setIsMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSelection(id) {
    if (isMultipleSelection) {
      setMultipleSelected((prevMultipleSelected) => {
        return prevMultipleSelected.includes(id)
          ? prevMultipleSelected.filter((item) => item !== id)
          : [...prevMultipleSelected, id];
      });
      setSelected(null);
    } else {
      setSelected((prevSelected) => (id === prevSelected ? null : id));
      setMultipleSelected([]);
    }
  }

  function renderChildren(dataItem) {
    if (isMultipleSelection) {
      return (
        multipleSelected.includes(dataItem.id) && (
          <div className="expandable">{dataItem.answer}</div>
        )
      );
    } else {
      return (
        selected === dataItem.id && (
          <div className="expandable">{dataItem.answer}</div>
        )
      );
    }
  }

  return (
    <div className="wrapper">
      <button
        onClick={() =>
          setIsMultipleSelection(
            (prevIsMultipleSelection) => !prevIsMultipleSelection
          )
        }
      >
        {isMultipleSelection
          ? "Enable Single Selection"
          : "Enable Multiple Selection"}
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id} className="accordion">
            <h3
              className="accordion-title"
              onClick={() => handleSelection(dataItem.id)}
            >
              {dataItem.question}
            </h3>
            {renderChildren(dataItem)}
          </div>
        ))
      ) : (
        <div>No data Found!</div>
      )}
    </div>
  );
};

export default Accordion;
