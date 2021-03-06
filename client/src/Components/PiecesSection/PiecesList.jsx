import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import styles from "./PiecesList.module.css";
import PieceCard from "./PieceCard";

function PiecesList(props) {
  if (!props.data || props.data.length === 0) {
    return (
      <div className={styles["warning"]}>
        <h1> No Pieces Found </h1>
        <Link to="/upload">
          <button className={styles["button"]}>Submit A Piece</button>
        </Link>
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
            likes={item.likes.length}
            flags={item.flags.length}
            // type={"Poem"}
          ></PieceCard>
        );
      })}
    </div>
  );
}

export default PiecesList;
