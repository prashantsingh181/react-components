import React from "react";
import { useAlert } from "./alertContext";

const icon = {
  success: <i className="bi bi-check-circle"></i>,
  error: <i class="bi bi-exclamation-octagon-fill"></i>,
};

const AlertComponent = () => {
  const { alert } = useAlert();
  if (alert.isVisible) {
    return (
      <div className="alert-container">
        {icon[alert.type]}
        <div>{alert.message}</div>
      </div>
    );
  }
};

export default AlertComponent;
