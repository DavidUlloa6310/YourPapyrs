import React from "react";

import styles from "./SignUpForm.module.css";

function SignupForm(props) {
  return (
    <form onSubmit={props.onSubmit} className={styles["form"]}>
      <div className={styles["input-div"]}>
        <label>Name</label>
        <input
          type="text"
          onChange={props.onNameChange}
          value={props.name}
        ></input>
      </div>
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
          onChange={props.onPasswordOneChange}
          value={props.passwordOne}
        ></input>
      </div>

      <div className={styles["input-div"]}>
        <label>Retype Password</label>
        <input
          type="password"
          onChange={props.onPasswordTwoChange}
          value={props.passwordTwo}
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

export default SignupForm;
