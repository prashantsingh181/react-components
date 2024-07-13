import { useRef } from "react";

const ScrollToParticularSection = () => {
  const elementRef = useRef();
  const data = [
    {
      label: "First Card",
      id: "first",
      style: {
        backgroundColor: "red",
        height: "500px",
      },
    },
    {
      label: "Second Card",
      id: "second",
      style: {
        backgroundColor: "blue",
        height: "500px",
      },
    },
    {
      label: "Third Card",
      id: "third",
      style: {
        backgroundColor: "green",
        height: "500px",
      },
    },
    {
      label: "Fourth Card",
      id: "fourth",
      style: {
        backgroundColor: "yellow",
        height: "500px",
      },
    },
    {
      label: "Fifth Card",
      id: "fifth",
      style: {
        backgroundColor: "orange",
        height: "500px",
      },
    },
  ];
  return (
    <div>
      <h3>Hit the Exclamation Mark to react to Fourth Section</h3>
      {/* we can also make it an anchor tag */}
      {/* <a style={{position: "fixed", right: "10px", top: "10px", borderRadius: "50%", backgroundColor: "lightblue", padding: "5px 20px", fontSize: "30px", cursor: "pointer", textDecoration: "none"}} href="#fourth">!</a> */}
      <button
        style={{
          position: "fixed",
          right: "10px",
          top: "10px",
          border: "0",
          borderRadius: "50%",
          backgroundColor: "lightblue",
          padding: "5px 20px",
          fontSize: "30px",
          cursor: "pointer",
        }}
        onClick={() =>
          elementRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        !
      </button>
      {data &&
        data.length &&
        data.map((dataItem, index) => (
          <div
            key={dataItem.label}
            id={dataItem.id}
            style={dataItem.style}
            ref={index === 3 ? elementRef : null}
          >
            {dataItem.label}
          </div>
        ))}
    </div>
  );
};

export default ScrollToParticularSection;
