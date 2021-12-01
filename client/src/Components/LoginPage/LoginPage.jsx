import React, { useContext, useState } from "react";
import Card from "../Shared/UI/Card";
import LoginForm from "./LoginForm";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import axios from "axios";
import { getLink } from "../../helpers/link";

import styles from "./LoginPage.module.css";
import { toast, ToastContainer } from "react-toastify";

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  function usernameHandler(event) {
    setUsername(event.target.value);
  }

  function passwordHandler(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username && password) {
      axios
        .post(getLink() + "/login", {
          email: username,
          password,
        })
        .then((res) => {
          setAuth(res.data);
          toast.success(`Welcome, ${res.data.user.name}`);
        })
        .catch((err) => {
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Please fill out all the portions of the form.");
    }
  }

  return (
    <section className={styles["login-section"]}>
      {auth ? <Redirect to="/"></Redirect> : null}
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
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default LoginPage;
