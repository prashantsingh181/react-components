import "./index.css";
import React, { useState } from "react";
import menus from "./data";

const TreeView = () => {
  const [openObject, setOpenObject] = useState({});
  return (
    <div className="tree-view-container">
      <MenuList
        list={menus}
        openObject={openObject}
        setOpenObject={setOpenObject}
      />
    </div>
  );
};

function MenuList({ list, openObject, setOpenObject }) {
  return (
    <ul className="menu-list">
      {list &&
        list.length > 0 &&
        list.map((item, i) => (
          <MenuItem
            key={i}
            item={item}
            openObject={openObject}
            setOpenObject={setOpenObject}
          />
        ))}
    </ul>
  );
}

function MenuItem({ item, openObject, setOpenObject }) {
  //   const [showChildren, setShowChildren] = useState(false);
  console.log(openObject);
  return (
    <li className="menu-item">
      <span>{item.label}</span>{" "}
      {item.children && (
        <span
          onClick={() =>
            setOpenObject((prevOpenObject) => ({
              ...prevOpenObject,
              [item.label]: !prevOpenObject[item.label],
            }))
          }
        >
          {openObject[item.label] ? "-" : "+"}
        </span>
      )}
      {openObject[item.label] && (
        <MenuList
          list={item.children}
          openObject={openObject}
          setOpenObject={setOpenObject}
        />
      )}
    </li>
  );
}

export default TreeView;
