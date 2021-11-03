import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../Shared/context/auth-context";

import styles from "./NavLinks.module.css";

function NavLinks(props) {
  const auth = useContext(AuthContext);

  return (
    <>
      <NavLink to="/" className={`${styles["link"]}`}>
        <h1 style={{ color: "black" }}>P&S</h1>
      </NavLink>

      <NavLink to="/" className={styles["link"]}>
        <li>Find Writting</li>
      </NavLink>

      {auth.isLoggedIn && (
        <NavLink to="/" className={styles["link"]}>
          <li>My Writting</li>
        </NavLink>
      )}

      {auth.isLoggedIn && (
        <NavLink to="/upload" className={styles["link"]}>
          <li>Submit Writing</li>
        </NavLink>
      )}
    </>
  );
}

export default NavLinks;
