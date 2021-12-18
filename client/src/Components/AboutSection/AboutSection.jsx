import React from "react";

import PieceCard from "../PiecesSection/PieceCard";

import styles from "./AboutSection.module.css";

import reading from "../../assets/reading.png";

function AboutSection(props) {
  return (
    <section className={styles["about-section"]}>
      <img
        src={reading}
        alt="Library of Congress"
        className={styles["reading-image"]}
      ></img>
      <div className={styles["text"]}>
        <h2>Let's share our passions</h2>
        <h3>
          YourPayprs is centered around sharing personal art, in the form of
          writting. <br /> Come along, scroll down and view other's pieces,
          ranging from comedy meant to make you laugh to deep, personal, and
          pensive pieces.
          <br /> Our goal is to simply allow for the share of content - if needs
          to be anonmyously, for the rest of the world can enjoy.
        </h3>
      </div>
    </section>
  );
}

export default AboutSection;
