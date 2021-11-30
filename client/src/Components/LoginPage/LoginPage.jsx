import React, { useState } from "react";
import Card from "../Shared/UI/Card";
import LoginForm from "./LoginForm";
import { Link, Redirect } from "react-router-dom";
import { isAuth } from "../../helpers/auth";

import styles from "./LoginPage.module.css";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={styles["login-section"]}>
      {isAuth() ? <Redirect to="/"></Redirect> : null}
      <Card className={styles["card"]}>
        <h1 className={styles["title"]}>Your Papyrs</h1>
        <hr className={styles["horizontal-rule"]} />
        <LoginForm
          onSubmit={handleSubmit}
          onEmailChange={usernameHandler}
          onPasswordChange={passwordHandler}
          email={username}
          password={password}
        ></LoginForm>
      </Card>
    </section>
  );
}

export default LoginPage;
