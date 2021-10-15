import React, { useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import Backdrop from "../UI/Backdrop";
import Drawer from "../UI/Drawer";
import NavLinks from "./NavLinks";

import styles from "./Navbar.module.css";

function Navbar(props) {
  const [burgerState, setBurgerState] = useState(false);

  function burgerStateHandler() {
    setBurgerState((prevState) => !prevState);
  }

  return (
    <nav className={styles.navbar}>
      <Drawer onClick={burgerStateHandler} show={burgerState}>
        <NavLinks />
      </Drawer>
      {burgerState && <Backdrop onClick={burgerStateHandler}></Backdrop>}
      <Link to="/" className={styles["link"]}>
        <h1>P&S</h1>
      </Link>
      <ul>
        <Link to="/" className={styles["link"]}>
          <li>Find Writting</li>
        </Link>
        <Link to="/" className={styles["link"]}>
          <li>My Writting</li>
        </Link>
        <Link to="/" className={styles["link"]}>
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
