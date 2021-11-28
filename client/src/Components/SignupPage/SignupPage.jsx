import React, { useState } from "react";
import Card from "../Shared/UI/Card";
import SignupForm from "./SignupForm";

import { ToastContainer, toast } from "react-toastify";

import styles from "./SignUpPage.module.css";

function SignupPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

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
    if (
      name === "" ||
      passwordOne === "" ||
      passwordTwo === "" ||
      email === ""
    ) {
      return toast.error("Please fill out all parts of the form.");
    }
    if (passwordOne !== passwordTwo) {
      // return toast.error("Passwords must match.");
    }
  }

  return (
    <section className={styles["signup-section"]}>
      <Card style={{ filter: "drop-shadow(0px 5px 5px black)" }}>
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
