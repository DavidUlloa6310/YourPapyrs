import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Backdrop from "../Shared/UI/Backdrop";
import Drawer from "../Shared//UI/Drawer";
import NavLinks from "./NavLinks";

import styles from "./Navbar.module.css";

import { AuthContext } from "../Shared/context/auth-context";

function Navbar(props) {
  const [burgerState, setBurgerState] = useState(false);

  function burgerStateHandler() {
    setBurgerState((prevState) => !prevState);
  }

  const auth = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <Drawer onClick={burgerStateHandler} show={burgerState}>
        <NavLinks />
      </Drawer>
      {burgerState && <Backdrop onClick={burgerStateHandler}></Backdrop>}
      <Link to="/" className={styles["link"]}>
        <h1>Your Papyrs</h1>
      </Link>
      <ul>
        <Link to="/" className={styles["link"]}>
          <li>Find Writting</li>
        </Link>

        <Link to="/upload" className={styles["link"]}>
          <li>Submit Writing</li>
        </Link>

        <div className={styles["burger"]} onClick={burgerStateHandler}>
          <span className={styles["line"]}></span>
          <span className={styles["line"]}></span>
          <span className={styles["line"]}></span>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
