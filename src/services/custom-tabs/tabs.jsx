import { useState } from "react";

export default function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="tabs-container">
      <div className="heading">
        {tabs &&
          tabs.length > 0 &&
          tabs.map((tabItem, index) => (
            <span
              className={`tab-label ${selectedTab === index ? "active" : ""}`}
              key={tabItem.label}
              onClick={() => setSelectedTab(index)}
            >
              {tabItem.label}
            </span>
          ))}
      </div>
      <div className="content">{tabs[selectedTab].content}</div>
    </div>
  );
}
