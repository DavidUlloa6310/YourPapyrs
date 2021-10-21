import React from "react";

import { FaUserCircle } from "react-icons/fa";
import PiecesList from "../PiecesSection/PiecesList";

import styles from "./ProfilePage.module.css";

function ProfilePage(props) {
  function fetchData() {}

  return (
    <section class={styles["section"]}>
      <FaUserCircle size={300}></FaUserCircle>
      <h1>David Ulloa</h1>
      <h2 className={styles["quote"]}>"Quote"</h2>
      <h1>Pieces</h1>
      <PiecesList></PiecesList>
    </section>
  );
}

export default ProfilePage;
