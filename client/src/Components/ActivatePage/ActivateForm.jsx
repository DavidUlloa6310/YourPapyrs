import React from "react";

import styles from "./ActivateForm.module.css";

function ActivateForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <button className={styles["button"]}>Activate your Account</button>
    </form>
  );
}

export default ActivateForm;
