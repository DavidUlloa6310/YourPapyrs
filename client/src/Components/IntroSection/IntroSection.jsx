import React from "react";

import styles from "./IntroSection.module.css";

import wordArt from "../../assets/book.png";

function IntroSection(props) {
  return (
    <section className={styles.IntroSection}>
      <div className={styles["IntroDiv"]}>
        <article className={styles["IntroArticle"]}>
          <h1>Your Papyrs</h1>
          <h2>Your stories, Your poems. Upload your writing.</h2>
        </article>
      </div>

      <div className={styles["custom-shape-divider-bottom-1634099041"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default IntroSection;
