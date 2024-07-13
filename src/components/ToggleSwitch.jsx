const ToggleSwitch = ({
  size = "25px",
  leftText,
  rightText,
  value,
  onClick,
}) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <span className="font-semibold text-primary-text dark:text-primary-dark-text">{leftText}</span>
      <button
        style={{
          width: `calc(2 * ${size} + 8px)`
        }}
        className="bg-primary-bg dark:bg-primary-dark-bg shadow-md border-primary-border dark:border-primary-dark-border rounded-full inline-flex p-1 cursor-pointer"
        onClick={onClick}
      >
        <span
          style={{ height: size }}
          className={`rounded-full aspect-square bg-theme-color border-2 border-secondary-color transition duration-300  ease-in-out ${value ? "transform translate-x-full" : ""
            }`}
        ></span>
      </button>
      <span className="font-semibold text-primary-text dark:text-primary-dark-text">{rightText}</span>
    </div>
  );
};

export default ToggleSwitch;
