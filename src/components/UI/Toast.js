import "./Toast.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");

const ToastNotification = ({ message, onClose }) => {
  console.log("Clicked toast");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="toast">
          <p>{message}</p>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default ToastNotification;
