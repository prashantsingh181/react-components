import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h3>This is a random component!</h3>;
}

export default function TabParent() {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is the content of tab 1",
    },
    { label: "Tab 2", content: <div>This is the content of tab 2</div> },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  return <Tabs tabs={tabs} />;
}
