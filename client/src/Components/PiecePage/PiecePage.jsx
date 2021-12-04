import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { useParams } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { getLink } from "../../helpers/link";

import Piece from "../Shared/Piece";

import { FaHeart, FaTrashAlt } from "react-icons/fa";

import styles from "./PiecePage.module.css";

function PiecePage(props) {
  const id = useParams().pieceId;
  const [piece, setPiece] = useState();
  const [loading, setLoading] = useState(true);

  const { auth, setAuth } = useContext(AuthContext);

  const headers = {
    "content-type": "application/json",
    token: auth.token,
  };

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

  function canDelete() {
    if (!auth) {
      return false;
    }

    if (!piece) {
      return false;
    }

    if (auth.user.role === "admin") {
      return true;
    }

    return piece.authorId === auth.user._id;
  }

  const [isLiked, setIsLiked] = useState(findIsLiked());
  const [redirect, setRedirect] = useState();

  useEffect(() => {
    fetch(`${getLink()}/pieces/${id}`, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setPiece(data.data.piece);
        return data;
      })
      .finally(() => {
        setLoading(false);
      });
    // console.log(
    //   (auth && auth.user.role === "admin") || piece.autherId === auth.user._id
    // );
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
    axios.patch(
      getLink() + `/users/${auth.user._id}`,
      {
        user: auth.user,
      },
      {
        headers: {
          token: process.env.REACT_APP_JWT_ADMIN_TOKEN,
        },
      }
    );
  }

  async function deletePiece() {
    if (window.confirm("Are you sure you want to delete this piece?")) {
      try {
        await fetch(`${getLink()}/pieces/${id}`, {
          method: "DELETE",
          headers: headers,
        });

        setRedirect(true);
      } catch (error) {
        console.log(error.response);
      }
    }
  }

  if (loading) {
    return (
      <section className={styles["piece-section"]}>
        <h1>Loading</h1>
      </section>
    );
  }

  if (redirect) {
    return <Redirect to="/"></Redirect>;
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

      <div className={styles["icons"]}>
        {auth !== null && (
          <FaHeart
            size={30}
            onClick={likeHandler}
            className={`${isLiked ? styles["liked"] : styles["not-liked"]} ${
              styles["icon"]
            }`}
          ></FaHeart>
        )}
        {canDelete() && (
          <FaTrashAlt
            size={30}
            className={styles["icon"]}
            onClick={deletePiece}
          ></FaTrashAlt>
        )}
      </div>
    </section>
  );
}

export default PiecePage;
