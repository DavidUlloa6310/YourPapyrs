import React from "react";

import { useParams } from "react-router-dom";

const DUMMY_DATA = {
  title: "Haiku",
  author: "David Ulloa",
  content: "An ocean voyage\nAs waves break over the bow\nthe sea welcomes me",
};

function PiecePage(props) {
  const id = useParams().pieceId;

  function fetchData() {}

  return (
    <div>
      {DUMMY_DATA.content.split("\n").map((str) => (
        <p>{str}</p>
      ))}
    </div>
  );
}

export default PiecePage;
