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
    token: auth ? auth.token : null,
  };

  function canLike() {
    return auth !== undefined;
  }

  function findIsLiked() {
    if (auth) {
      axios
        .get(`${getLink()}/users/${auth.user._id}/likedPieces`, {
          headers: headers,
        })
        .then((response) => {
          response.data.likedPieces.forEach((element) => {
            if (element === id) {
              setIsLiked(true);
              return true;
            }
          });
        });
      setIsLiked(false);
      return false;
    } else {
      setIsLiked(false);
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

  const [isLiked, setIsLiked] = useState(false);
  const [redirect, setRedirect] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let response = await fetch(`${getLink()}/pieces/${id}`);
        response = await response.json();
        setPiece(response.data.piece);
        findIsLiked();
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    }

    fetchData();
  }, []);

  async function likeHandler() {
    if (isLiked) {
      setIsLiked(false);
      await axios.delete(`${getLink()}/users/${auth.user._id}/likedPiece`, {
        headers: headers,
        data: {
          pieceId: piece._id,
        },
      });
    } else {
      setIsLiked(true);
      await axios.put(
        `${getLink()}/users/${auth.user._id}/likedPiece`,
        { pieceId: piece._id },
        {
          headers: headers,
        }
      );
    }
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
        {canLike() && (
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
