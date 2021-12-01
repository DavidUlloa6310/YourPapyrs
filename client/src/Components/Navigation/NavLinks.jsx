import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import book_black from "../../assets/book_black.png";
import { AuthContext } from "../../helpers/AuthContext";
import styles from "./NavLinks.module.css";

function NavLinks(props) {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <>
      <img className={styles["book"]} src={book_black} alt="Books" />

      <NavLink to="/" className={`${styles["link"]}`}>
        <h1 style={{ color: "black", textAlign: "center" }}>Your Papyrs</h1>
      </NavLink>

      <NavLink to="/" className={styles["link"]}>
        <li>Find Writting</li>
      </NavLink>

      <NavLink to="/upload" className={styles["link"]}>
        <li>Submit Writing</li>
      </NavLink>

      {!auth && (
        <NavLink to="/login" className={styles["link"]}>
          <button className={`${styles["button"]} ${styles["dark-button"]}`}>
            Login
          </button>
        </NavLink>
      )}

      {!auth && (
        <NavLink to="/signup" className={styles["link"]}>
          <button className={`${styles["button"]} ${styles["light-button"]}`}>
            Signup
          </button>
        </NavLink>
      )}

      {auth && (
        <NavLink to="/signout" className={styles["link"]}>
          <button className={`${styles["button"]} ${styles["dark-button"]}`}>
            Signout
          </button>
        </NavLink>
      )}
    </>
  );
}

export default NavLinks;
