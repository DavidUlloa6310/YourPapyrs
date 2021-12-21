import React, { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import Backdrop from "../Shared/UI/Backdrop";
import Drawer from "../Shared//UI/Drawer";
import NavLinks from "./NavLinks";

import styles from "./Navbar.module.css";
import { AuthContext } from "../../helpers/AuthContext";

import book from "../../assets/book.png";

function Navbar(props) {
  const [burgerState, setBurgerState] = useState(false);

  function burgerStateHandler() {
    setBurgerState((prevState) => !prevState);
  }

  const { auth, setAuth } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <Drawer onClick={burgerStateHandler} show={burgerState}>
        <NavLinks />
      </Drawer>
      {burgerState && <Backdrop onClick={burgerStateHandler}></Backdrop>}
      <Link to="/">
        <img src={book} alt="Book Icon"></img>
      </Link>
      <ul>
        <Link to="/upload" className={styles["link"]}>
          <li>Submit Writing</li>
        </Link>

        {!auth && (
          <Link to="/login" className={styles["link"]}>
            <button className={`${styles["button"]} ${styles["dark-button"]}`}>
              Login
            </button>
          </Link>
        )}

        {!auth && (
          <Link to="/signup" className={styles["link"]}>
            <button className={`${styles["button"]} ${styles["light-button"]}`}>
              Signup
            </button>
          </Link>
        )}

        {auth && (
          <Link to="/signout" className={styles["link"]}>
            <button className={`${styles["button"]} ${styles["dark-button"]}`}>
              Signout
            </button>
          </Link>
        )}

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
