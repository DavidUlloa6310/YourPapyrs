import React from "react";

import { useParams } from "react-router-dom";

import Piece from "../Shared/Piece";

import styles from "./PiecePage.module.css";

const DUMMY_DATA = {
  title: "Haiku",
  author: "David Ulloa",
  content: "An ocean voyage\nAs waves break over the bow\nthe sea welcomes me",
};

function PiecePage(props) {
  const id = useParams().pieceId;

  function fetchData() {}

  return (
    <section className={styles["piece-section"]}>
      <Piece
        title={DUMMY_DATA.title}
        author={DUMMY_DATA.author}
        content={DUMMY_DATA.content}
        textStyle={{
          textAlign: "center",
          fontSize: "1.5em",
        }}
      ></Piece>
    </section>
  );
}

export default PiecePage;
