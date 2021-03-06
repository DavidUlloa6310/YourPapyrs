import React, { useEffect, useState } from "react";
import PiecesList from "./PiecesList";
import { getLink } from "../../helpers/link";

import styles from "./PiecesSection.module.css";

function PiecesSection(props) {
  const [piecesData, setPiecesData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${getLink()}/pieces`);
        const data = await response.json();
        if (response.ok) {
          setPiecesData(data.data.piece);
          setLoading(false);
        } else {
          throw Error("Could not fetch Data");
        }
      } catch (err) {
        return <h1 className={styles["error"]}>Error</h1>;
      }
    }
    getData();
  }, []);

  if (loading) {
    <section className={styles["piece-section"]}>
      <h1>Loading...</h1>
    </section>;
  }
  return (
    <section className={styles["piecesSection"]}>
      <h1 className={styles["piecesTitle"]}>Pieces</h1>
      <PiecesList data={piecesData}></PiecesList>
    </section>
  );
}

export default PiecesSection;
