import React from "react";

import styles from "./LoginForm.module.css";

function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit} className={styles["form"]}>
      <div className={styles["input-div"]}>
        <label>Email</label>
        <input
          type="email"
          onChange={props.onEmailChange}
          value={props.email}
        ></input>
      </div>

      <div className={styles["input-div"]}>
        <label>Password</label>
        <input
          type="password"
          onChange={props.onPasswordChange}
          value={props.password}
        ></input>
      </div>
      <div className={styles["input-div"]}>
        <button
          className={styles["button"]}
          type="submit"
          onClick={props.onButtonClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
