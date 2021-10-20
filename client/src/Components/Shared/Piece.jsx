import React from "react";

import styles from "./Piece.module.css";

function Piece(props) {
  return (
    <article className={styles["article"]}>
      {props.preview && <h1 className={styles["preview-text"]}>Preview</h1>}
      <h1 className={styles["title"]}>{props.title}</h1>
      <div className={styles["text"]} style={props.textStyle}>
        {props.content.split("\n").map((str) => (
          <p
            key={Math.random()}
            className={styles["line"]}
            style={props.textStyle}
          >
            {str}
          </p>
        ))}
      </div>
      <h2 className={styles["author"]}>By {props.author}</h2>
    </article>
  );
}

export default Piece;
