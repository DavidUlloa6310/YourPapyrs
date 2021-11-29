import axios from "axios";
import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import ActivateForm from "./ActivateForm";
import { isAuth } from "../../helpers/auth";
import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import styles from "./ActivatePage.module.css";

function ActivatePage(props) {
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);
  const [showError, setShowError] = useState("");

  let rawToken = useParams().urlToken;

  useEffect(() => {
    try {
      if (!jwt.verify(rawToken, process.env.REACT_APP_JWT_SECRET)) {
        return setShowError(true);
      } else {
        let { payload } = jwt.decode(rawToken, { complete: true });
        setName(payload.name);
      }
    } catch (e) {
      setShowError(
        "Your activation code has expired. Please Sign-Up Again.\nYou have 15 minutes after your signup to activate."
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let apiURL;
    if (process.env.REACT_APP_DEVELOPMENT) {
      apiURL = `${process.env.REACT_APP_LOCALHOST_URL}`;
    } else {
      apiURL = `${process.env.REACT_APP_PRODUCTION_URL}`;
    }

    axios
      .post(`${apiURL}/api/v1/activation`, {
        token: rawToken,
      })
      .then((res) => {
        setShow(false);
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <section className={styles["activate-section"]}>
      <ToastContainer></ToastContainer>
      <h1 style={{ textAlign: "center" }}>Welcome {name}</h1>
      {isAuth() ? <Redirect to="/"></Redirect> : null}
      <div className={styles["activate-container"]}>
        <ActivateForm handleSubmit={handleSubmit}></ActivateForm>
        <hr className={styles["line"]}></hr>
        <Link to="/signup">
          <button className={styles["button"]}>Sign Up</button>
        </Link>
      </div>
    </section>
  );
}

export default ActivatePage;
