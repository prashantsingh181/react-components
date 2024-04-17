import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ isVisible: false });

  function showSuccessAlert(msg) {
    setAlert({ isVisible: true, type: "success", message: msg });
    setTimeout(() => setAlert({ isVisible: false }));
  }

  function showErrorAlert(msg) {
    setAlert({ isVisible: true, type: "error", message: msg });
    setTimeout(() => setAlert({ isVisible: false }));
  }

  return (
    <AlertContext.Provider value={{ alert, showSuccessAlert, showErrorAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
