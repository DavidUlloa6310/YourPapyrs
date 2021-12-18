import React, { useContext } from "react";
import { FaHeart, FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";

import Card from "../Shared/UI/Card";

import styles from "./PieceCard.module.css";

function Piece(props) {
  let { auth, setAuth } = useContext(AuthContext);

  return (
    <Link to={`piece/${props.id}`} className={styles["link-style"]}>
      <Card className={`${styles["piece"]} ${props.className}`}>
        <div>
          <h1 className={styles["title"]}>{props.title} </h1>
          <h2>By {props.author}</h2>
        </div>
        {/* {props.id} */}
        <h2>{props.type}</h2>
        <div className={styles["heart-div"]}>
          <FaHeart size={25} className={styles["heart"]}></FaHeart>
          <p>{props.likes}</p>
        </div>
        {auth && auth.user.role === "admin" && (
          <div className={styles["flag-div"]}>
            <FaFlag size={25} className={styles["flag"]}></FaFlag>
            <p>{props.flags}</p>
          </div>
        )}
      </Card>
    </Link>
  );
}

export default Piece;
