import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { getLink } from "../../helpers/link";

import Piece from "../Shared/Piece";

import { FaHeart } from "react-icons/fa";

import styles from "./PiecePage.module.css";

function PiecePage(props) {
  const id = useParams().pieceId;
  const [piece, setPiece] = useState();
  const [loading, setLoading] = useState(true);

  const { auth, setAuth } = useContext(AuthContext);

  function findIsLiked() {
    let found = false;

    if (auth) {
      auth.user.likedPieces.forEach((element) => {
        if (element + "" === id) {
          found = true;
          return;
        }
      });
      if (found) return true;
      return false;
    } else {
      return false;
    }
  }

  const [isLiked, setIsLiked] = useState(findIsLiked());

  useEffect(() => {
    fetch(`${getLink()}/pieces/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPiece(data.data.piece);
        return data;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function likeHandler() {
    if (isLiked) {
      setIsLiked(false);
      const index = auth.user.likedPieces.indexOf(id);
      if (index > -1) {
        auth.user.likedPieces.splice(index, 1);
      }
    } else {
      setIsLiked(true);
      auth.user.likedPieces.push(id);
    }

    console.log(auth.user._id);
    axios.patch(getLink() + `/users/${auth.user._id}`, {
      user: auth.user,
    });
  }

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

      {auth && (
        <FaHeart
          size={30}
          onClick={likeHandler}
          className={isLiked ? styles["liked"] : styles["not-liked"]}
        ></FaHeart>
      )}
      {/* {auth && (
        <div className={styles["toolbar"]}>
        </div>
      )} */}
    </section>
  );
}

export default PiecePage;
