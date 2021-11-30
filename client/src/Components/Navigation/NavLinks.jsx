import React from "react";

import { NavLink } from "react-router-dom";

import book_black from "../../assets/book_black.png";
import styles from "./NavLinks.module.css";

function NavLinks(props) {
  return (
    <>
      <img className={styles["book"]} src={book_black} alt="Books" />

      <NavLink to="/" className={`${styles["link"]}`}>
        <h1 style={{ color: "black" }}>Your Papyrs</h1>
      </NavLink>

      <NavLink to="/" className={styles["link"]}>
        <li>Find Writting</li>
      </NavLink>

      <NavLink to="/upload" className={styles["link"]}>
        <li>Submit Writing</li>
      </NavLink>

      <NavLink to="/login" className={styles["link"]}>
        <button className={`${styles["button"]} ${styles["dark-button"]}`}>
          Login
        </button>
      </NavLink>

      <NavLink to="/signup" className={styles["link"]}>
        <button className={`${styles["button"]} ${styles["light-button"]}`}>
          Signup
        </button>
      </NavLink>
    </>
  );
}

export default NavLinks;
