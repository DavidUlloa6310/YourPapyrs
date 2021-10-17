import React from "react";

import UploadForm from "./UploadForm";

import styles from "./UploadPage.module.css";

function UploadPage(props) {
  function submitHandler(data) {
    console.log(data);
  }

  return (
    <section className={styles["page"]}>
      <UploadForm onSubmit={submitHandler}></UploadForm>
    </section>
  );
}

export default UploadPage;
