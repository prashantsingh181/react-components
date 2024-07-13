import useWindowResize from ".";
const UseWindowResizeTest = () => {
  const size = useWindowResize();

  return (
    <div
      style={{
        height: "100dvh",
        backgroundColor: "azure",
        color: "#012970",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        fontWeight: "bold"
      }}
    >
      <div>Window Height: {size.height}</div>
      <div>Window Width: {size.width}</div>
    </div>
  );
};

export default UseWindowResizeTest;
