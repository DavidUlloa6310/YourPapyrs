import React, { useState, useContext } from "react";

import styles from "./LoginForm.module.css";

function LoginForm(props) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <form>
      <div className={styles["input-div"]}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles["input-div"]}>
        <label>Password</label>
        <input type="password" />
      </div>
      <div className={styles["input-div"]}>
        <button className={styles["button"]}>Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;
