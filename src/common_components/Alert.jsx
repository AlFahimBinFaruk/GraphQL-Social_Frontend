import React from "react";
import { useGlobalAlertContext } from "../contexts/alertContext";
const Alert = () => {
  let { showAlert, setShowAlert } = useGlobalAlertContext();
  return (
    <>
      {showAlert && (
        <div
          className={`alert alert-${showAlert?.color} alert-fixed fade ${
            showAlert ? "show" : "d-none"
          }`}
          role="alert"
          style={{
            width: "450px",
            right: "1%",
            top: "15%",
            bottom: "unset",
            left: "unset",
            transform: "unset",
          }}
        >
          <div className="d-flex justify-content-between">
            <strong>{showAlert?.msg}!</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
