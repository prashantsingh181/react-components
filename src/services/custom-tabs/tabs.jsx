import { useSearchParams } from "react-router-dom";

export default function Tabs({ tabs }) {

  const [searchParams, setSearchParams] = useSearchParams();
  let currentTabIndex = tabs.findIndex(
    (tab) => tab.label === searchParams.get("activeTab")
  );
  currentTabIndex = currentTabIndex === -1 ? 0 : currentTabIndex;
  console.log(searchParams.get("activeTab"));

  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-8 py-8  text-primary-text dark:text-primary-dark-text">
      <div className="flex flex-row">
        {tabs &&
          tabs.length > 0 &&
          tabs.map((tabItem, index) => (
            <span
              className={`px-2 py-3 flex-1 text-center text-lg font-bold rounded-t ${
                currentTabIndex === index
                  ? "bg-primary-bg dark:bg-primary-dark-bg"
                  : ""
              }`}
              key={tabItem.label}
              onClick={() =>
                setSearchParams((params) => {
                  params.set("activeTab", tabItem.label);
                  return params;
                })
              }
            >
              {tabItem.label}
            </span>
          ))}
      </div>
      <div className="bg-primary-bg dark:bg-primary-dark-bg p-2 rounded-b">
        {tabs[currentTabIndex].content}
      </div>
    </div>
  );
}
