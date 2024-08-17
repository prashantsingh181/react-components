import ToggleSwitch from "../../components/ToggleSwitch";
import AlertComponent from "./AlertComponent";
import { useAlert } from "./AlertContext";

const AlertTest = () => {
  const { alert, setAlert, showSuccessAlert, showErrorAlert } = useAlert();

  function toggleAlertType() {
    setAlert((prevAlert) => ({
      ...prevAlert,
      style: prevAlert.style === "bold" ? "subtle" : "bold",
    }));
  }

  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 items-center text-primary-text dark:text-primary-dark-text">
      <div className="flex gap-6">
        <button
          className="primary-button"
          onClick={() => showErrorAlert("Error Message")}
        >
          Error Alert
        </button>
        <button
          className="primary-button"
          onClick={() => showSuccessAlert("Success Message")}
        >
          Success Alert
        </button>
      </div>
      <div>Alert Type</div>
      <ToggleSwitch
        leftText="Subtle"
        rightText="Bold"
        value={alert.style === "bold"}
        onClick={toggleAlertType}
      />
      <AlertComponent />
    </div>
  );
};

export default AlertTest;
