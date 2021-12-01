import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import Card from "../Shared/UI/Card";
import SignupForm from "./SignupForm";
import { getLink } from "../../helpers/link";

import { ToastContainer, toast } from "react-toastify";

import styles from "./SignUpPage.module.css";
import axios from "axios";
import { AuthContext } from "../../helpers/AuthContext";
function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  function nameHandler(event) {
    setName(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordOneHandler(event) {
    setPasswordOne(event.target.value);
  }

  function passwordTwoHandler(event) {
    setPasswordTwo(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(name, passwordOne, passwordTwo, email);
    if (
      name === "" ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === ""
    ) {
      return toast.error("Please fill out all parts of the form.");
    }
    if (passwordOne !== passwordTwo) {
      return toast.error("Passwords must match.");
    }

    axios
      .post(getLink() + "/register", {
        name,
        email,
        password: passwordOne,
      })
      .then((res) => {
        setName("");
        setEmail("");
        setPasswordOne("");
        setPasswordTwo("");
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.errors);
      });
  }

  return (
    <section className={styles["signup-section"]}>
      {auth ? <Redirect to="/"></Redirect> : null}
      <Card className={styles["card"]}>
        <h1 className={styles["title"]}>Your Papyrs</h1>
        <hr className={styles["horizontal-rule"]} />
        <SignupForm
          onSubmit={submitHandler}
          name={name}
          email={email}
          passwordOne={passwordOne}
          passwordTwo={passwordTwo}
          onNameChange={nameHandler}
          onEmailChange={emailHandler}
          onPasswordOneChange={passwordOneHandler}
          onPasswordTwoChange={passwordTwoHandler}
        ></SignupForm>
      </Card>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default SignupPage;
