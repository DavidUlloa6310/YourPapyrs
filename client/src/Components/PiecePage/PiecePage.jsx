import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Piece from "../Shared/Piece";

import styles from "./PiecePage.module.css";

function PiecePage(props) {
  const id = useParams().pieceId;
  const [piece, setPiece] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://calm-plains-43987.herokuapp.com/api/v1/pieces/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPiece(data.data.piece);
        return data;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className={styles["piece-section"]}>
        <h1>Loading</h1>
      </section>
    );
  }

  return (
    <section className={styles["piece-section"]}>
      <Piece
        title={piece.title}
        author={piece.author}
        content={piece.text}
        textStyle={{
          textAlign: "center",
        }}
      ></Piece>
    </section>
  );
}

export default PiecePage;
