import React, { useState } from "react";
import Piece from "../Shared/Piece";
import Card from "../Shared/UI/Card";

import UploadForm from "./UploadForm";

import styles from "./UploadPage.module.css";

function UploadPage(props) {
  function submitHandler(data) {
    console.log(data);
  }
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Anonymous");

  const [textStyles, setTextStyles] = useState({});

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  function updateStyles(styleObject) {
    setTextStyles(styleObject);
    console.log(textStyles);
  }

  return (
    <section className={styles["page"]}>
      <UploadForm
        onSubmit={submitHandler}
        onTitleChange={titleHandler}
        onContentChange={contentHandler}
        updateStyles={updateStyles}
        content={content}
        title={title}
      ></UploadForm>
      <Card className={styles["card"]}>
        <Piece
          content={content}
          author={author}
          title={title}
          textStyle={textStyles}
        ></Piece>
      </Card>
    </section>
  );
}

export default UploadPage;
