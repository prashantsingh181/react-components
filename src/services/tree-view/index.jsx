import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import menus from "./data";

const TreeView = () => {
  const [openedListIds, setOpenedListIds] = useState([]);

  function handleListExpandAndCollapse(id) {
    setOpenedListIds((prevOpenedListIds) =>
      prevOpenedListIds.includes(id)
        ? prevOpenedListIds.filter((listId) => listId !== id)
        : [...prevOpenedListIds, id]
    );
  }

  return (
    <div className="h-full p-6 w-60 bg-primary-bg dark:bg-primary-dark-bg text-primary-text dark:text-primary-dark-text shadow-xl">
      <MenuList
        list={menus}
        openedListIds={openedListIds}
        handleListExpandAndCollapse={handleListExpandAndCollapse}
      />
    </div>
  );
};

function MenuList({ list, openedListIds, handleListExpandAndCollapse }) {
  return (
    <ul className="overflow-hidden">
      {list &&
        list.length > 0 &&
        list.map((item, i) => (
          <MenuItem
            key={item.id}
            item={item}
            openedListIds={openedListIds}
            handleListExpandAndCollapse={handleListExpandAndCollapse}
          />
        ))}
    </ul>
  );
}

function MenuItem({ item, openedListIds, handleListExpandAndCollapse }) {
  const isExpanded = openedListIds.includes(item.id);
  return (
    <li>
      <div
        role="button"
        className="flex gap-2 text-lg font-bold items-center justify-between py-1"
        onClick={() => {
          item.children && handleListExpandAndCollapse(item.id);
        }}
      >
        <span className={`${isExpanded && "text-theme-color"}`}>
          {item.label}
        </span>
        {item.children && (
          <IoIosArrowDown
            className={`transition-transform duration-300 ease-linear ${
              isExpanded ? "rotate-0" : "rotate-180"
            }`}
          />
        )}
      </div>
      <div
        className={`ml-6 grid transition-[grid-template-rows] duration-300 ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <MenuList
          list={item.children}
          openedListIds={openedListIds}
          handleListExpandAndCollapse={handleListExpandAndCollapse}
        />
      </div>
    </li>
  );
}

export default TreeView;
