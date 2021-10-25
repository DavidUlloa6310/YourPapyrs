import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import styles from "./Modal.module.css";

function Modal(props) {
  const content = (
    <>
      <div className={styles["modal-container"]}>
        <div className={styles["modal"]}>{props.children}</div>
      </div>
      <Backdrop onClick={props.onClick}></Backdrop>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

export default Modal;
