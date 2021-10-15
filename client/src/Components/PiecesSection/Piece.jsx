import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Card from "../UI/Card";

import styles from "./Piece.module.css";

function Piece(props) {
  return (
    <Link to={`piece/${props.id}`} className={styles["link-style"]}>
      <Card className={styles["piece"]}>
        <div>
          <h1 className={styles["title"]}>{props.title} </h1>
          <h2>By {props.author}</h2>
        </div>
        {/* {props.id} */}
        <h2>{props.type}</h2>
      </Card>
    </Link>
  );
}

export default Piece;
