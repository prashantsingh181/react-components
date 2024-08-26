import React, { createContext, useContext, useState, useRef } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    isVisible: false,
    type: "",
    message: "",
    style: "subtle",
  });
  const timeoutRef = useRef();
  function showSuccessAlert(msg) {
    clearTimeout(timeoutRef.current);
    setAlert((prevAlert) => ({
      ...prevAlert,
      isVisible: true,
      type: "success",
      message: msg,
    }));
    timeoutRef.current = setTimeout(
      () => setAlert((prevAlert) => ({ ...prevAlert, isVisible: false })),
      3000
    );
  }

  function showErrorAlert(msg) {
    clearTimeout(timeoutRef.current);
    setAlert((prevAlert) => ({
      ...prevAlert,
      isVisible: true,
      type: "error",
      message: msg,
    }));
    timeoutRef.current = setTimeout(
      () => setAlert((prevAlert) => ({ ...prevAlert, isVisible: false })),
      3000
    );
  }

  return (
    <AlertContext.Provider
      value={{ alert, setAlert, showSuccessAlert, showErrorAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
