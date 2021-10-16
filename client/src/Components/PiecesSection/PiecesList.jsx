import React from "react";

import styles from "./PiecesList.module.css";
import PieceCard from "./PieceCard";

function PiecesList(props) {
  function fetchData() {}

  const DATA = [
    { id: 0, author: "David", title: "The Raven", type: "Poem" },
    { id: 1, author: "David", title: "The Raven", type: "Poem" },
    { id: 2, author: "David", title: "The Raven", type: "Poem" },
    { id: 3, author: "David", title: "The Raven", type: "Poem" },
    { id: 4, author: "David", title: "The Raven", type: "Poem" },
    { id: 5, author: "David", title: "The Raven", type: "Poem" },
    { id: 6, author: "David", title: "The Raven", type: "Poem" },
  ];

  return (
    <div className={styles["grid"]}>
      {DATA.map((item) => {
        return (
          <PieceCard
            author={item.author}
            title={item.title}
            key={item.id}
            id={item.id}
            type={item.type}
          ></PieceCard>
        );
      })}
    </div>
  );
}

export default PiecesList;
