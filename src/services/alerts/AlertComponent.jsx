import { useAlert } from "./AlertContext";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const AlertComponent = () => {
  const { alert } = useAlert();
  if (alert.isVisible) {
    return alert.style === "bold" ? (
      <div className="fixed z-20  bottom-4 left-0 p-2 md:p-4 md:pl-[304px] w-full">
        <div
          className={`${
            alert.type === "error" ? "bg-red-300" : "bg-green-300"
          } p-4 rounded bg-opacity-60 backdrop-blur-sm border-slate-300 shadow-lg`}
        >
          <div className="flex gap-4 items-center">
            {alert.type === "error" ? (
              <IoMdCloseCircle size="1.25rem" className="text-red-500" />
            ) : (
              <FaCheckCircle size="1.25rem" className="text-green-500" />
            )}
            <h4 className="font-bold text-xl">
              {alert.type[0].toUpperCase() + alert.type.slice(1)}
            </h4>
          </div>
          <div className="ml-8 p-1.5">{alert.message}</div>
        </div>
      </div>
    ) : (
      <div
        className={`${
          alert.type === "error" ? "bg-red-300" : "bg-green-300"
        } fixed z-20 top-24 right-8 flex flex-row gap-5 items-center bg-opacity-60 backdrop-blur-sm px-3 py-2 rounded border-slate-300 shadow-lg animate-floatDown`}
      >
        <div className="flex flex-row gap-3 items-center">
          {alert.type === "error" ? (
            <IoMdCloseCircle className="text-red-500" />
          ) : (
            <FaCheckCircle className="text-green-500" />
          )}
          <span className="font-bold">{alert.message}</span>
        </div>
      </div>
    );
  }
};

export default AlertComponent;
