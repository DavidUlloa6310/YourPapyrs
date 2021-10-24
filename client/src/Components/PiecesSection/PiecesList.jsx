import React from "react";

import styles from "./PiecesList.module.css";
import PieceCard from "./PieceCard";

function PiecesList(props) {
  if (!props.data || props.data.length === 0) {
    return (
      <div className={styles["warning"]}>
        <h1> No Pieces Found </h1>
        <button className={styles["button"]}>Submit A Piece</button>
      </div>
    );
  }

  return (
    <div className={styles["grid"]}>
      {props.data.map((item) => {
        return (
          <PieceCard
            author={item.author}
            title={item.title}
            key={item._id}
            id={item._id}
            type={"Poem"}
          ></PieceCard>
        );
      })}
    </div>
  );
}

export default PiecesList;
