import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import Card from "../Shared/UI/Card";

import styles from "./PieceCard.module.css";

function Piece(props) {
  return (
    <Card className={styles["piece"]}>
      <Link to={`piece/${props.id}`} className={styles["link-style"]}>
        <div>
          <h1 className={styles["title"]}>{props.title} </h1>
          <h2>By {props.author}</h2>
        </div>
        {/* {props.id} */}
        <h2>{props.type}</h2>
      </Link>
      <button className={styles["heart-button"]}>
        <FaHeart
          className={`${styles["heart-icon"]} ${styles["selected-icon"]}`}
          size={30}
        ></FaHeart>
      </button>
    </Card>
  );
}

export default Piece;
