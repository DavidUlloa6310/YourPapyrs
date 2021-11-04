import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./NavLinks.module.css";

function NavLinks(props) {
  return (
    <>
      <NavLink to="/" className={`${styles["link"]}`}>
        <h1 style={{ color: "black" }}>Your Papyrs</h1>
      </NavLink>

      <NavLink to="/" className={styles["link"]}>
        <li>Find Writting</li>
      </NavLink>

      <NavLink to="/upload" className={styles["link"]}>
        <li>Submit Writing</li>
      </NavLink>
    </>
  );
}

export default NavLinks;
