import React, { useEffect, useState } from "react";
import PiecesList from "./PiecesList";

import styles from "./PiecesSection.module.css";

function PiecesSection(props) {
  const [piecesData, setPiecesData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/pieces")
      .then((resposne) => resposne.json())
      .then((data) => {
        setPiecesData(data.data.piece);
        return data;
      })
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={styles["piecesSection"]}>
      <h1 className={styles["piecesTitle"]}>Pieces</h1>
      <PiecesList data={piecesData}></PiecesList>
    </section>
  );
}

export default PiecesSection;
