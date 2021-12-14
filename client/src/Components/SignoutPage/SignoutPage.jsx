import React, { useEffect, useContext } from "react";

import { AuthContext } from "../../helpers/AuthContext";

import styles from "./SignoutPage.module.css";

function SignoutPage(props) {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    return setAuth(false);
  }, []);

  return (
    <section className={styles["signout-section"]}>
      <h1 className={styles["title"]}>You Have Been Signed Out</h1>
    </section>
  );
}

export default SignoutPage;
