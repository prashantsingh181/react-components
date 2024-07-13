import "./styles.css";
import { useState } from "react";
import CustomModal from "./CustomModal";

const ModalParent = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal((prevShowModal) => !prevShowModal);
        }}
      >
        Modal Button
      </button>
      {showModal && <CustomModal setShowModal={setShowModal} modalObject = {{header: <h1>Modal Header</h1>, body: <p>Modal Body</p>, footer: <h3>Modal Footer</h3>}}/>}
    </div>
  );
};

export default ModalParent;
