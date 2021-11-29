import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Card from "../Shared/UI/Card";
import SignupForm from "./SignupForm";
import { isAuth } from "../../helpers/auth";

import { ToastContainer, toast } from "react-toastify";

import styles from "./SignUpPage.module.css";
import axios from "axios";
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

    let apiURL;
    if (process.env.REACT_APP_DEVELOPMENT) {
      apiURL = `${process.env.REACT_APP_LOCALHOST_URL}/api/v1/register`;
    } else {
      apiURL = `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/register`;
    }

    axios
      .post(apiURL, {
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
      {isAuth() ? <Redirect to="/"></Redirect> : null}
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
