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
  const [isAnon, setIsAnon] = useState(false);

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

  function anonHandler(event) {
    setIsAnon((prevState) => !prevState);
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
        toggleAnon={anonHandler}
      ></UploadForm>
      <Card className={styles["card"]}>
        <Piece
          content={content}
          author={isAnon ? "Anonymous" : "David Ulloa"}
          title={title}
          textStyle={textStyles}
        ></Piece>
      </Card>
    </section>
  );
}

export default UploadPage;
