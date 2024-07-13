import { useEffect, useCallback } from "react";
export default function CustomModal({ setShowModal, modalObject }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        setShowModal(false);
      }
    },
    [setShowModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowModal(false)}>
          &times;
        </button>
        <div className="modal-header">{modalObject && modalObject.header}</div>
        <div className="modal-body">{modalObject && modalObject.body}</div>
        <div className="modal-footer">{modalObject && modalObject.footer}</div>
      </div>
    </div>
  );
}
