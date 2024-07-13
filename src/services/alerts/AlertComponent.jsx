import React from "react";
import "./alertStyles.css"
import { useAlert } from "./AlertContext";

const icon = {
  success: <i className="bi bi-check-circle"></i>,
  error: <i class="bi bi-exclamation-octagon-fill"></i>,
};
const styles = {
  success: {
    backgroundColor: "#d1e7dd",
    color: "#0a3622",
    border: "1px solid #0a3622"
  },
  error: {
    backgroundColor: "#f8d7da",
    color: "#58151c",
    border: "1px solid #58151c"
  }
}

const AlertComponent = () => {
  const { alert } = useAlert();
  if (alert.isVisible) {
    return (
      <div className="alert-container">
        <div className="alert-box" style={styles[alert.type]}>
          <div className="alert-icon-container">
            <div>{icon[alert.type]}</div>
            <div>{alert.type[0].toUpperCase() + alert.type.slice(1)}</div>
          </div>
          <div className="alert-message">{alert.message}</div>
        </div>
      </div>
    );
  }
};

export default AlertComponent;
