import React from "react";
import PiecesList from "./PiecesList";

import styles from "./PiecesSection.module.css";

function PiecesSection(props) {
  return (
    <section className={styles["piecesSection"]}>
      <h1 className={styles["piecesTitle"]}>Pieces</h1>
      <PiecesList></PiecesList>
    </section>
  );
}

export default PiecesSection;
