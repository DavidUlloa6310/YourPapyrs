import React from "react";

import LoginForm from "./LoginForm";

import styles from "./Login.module.css";

function Login(props) {
  return (
    <section className={styles["form-section"]}>
      <LoginForm></LoginForm>
    </section>
  );
}

export default Login;
