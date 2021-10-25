import React, { useState } from "react";
import Piece from "../Shared/Piece";
import Card from "../Shared/UI/Card";
import Modal from "../Shared/UI/Modal";

import UploadForm from "./UploadForm";

import styles from "./UploadPage.module.css";

function UploadPage(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnon, setIsAnon] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const [textStyles, setTextStyles] = useState({});

  async function submitHandler(data) {
    const response = await fetch("http://localhost:5000/api/v1/pieces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        text: content,
        author: isAnon ? "Anonymous" : "David Ulloa",
      }),
    });
    if (response.ok) {
      setShowModal(true);
    } else {
      setShowError(true);
    }
  }

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  function toggleError() {
    setShowError((prevState) => !prevState);
  }

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  function updateStyles(styleObject) {
    setTextStyles(styleObject);
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
      {showModal && (
        <Modal onClick={toggleModal}>
          <h1>Piece Submitted</h1>
          <button className={styles["button"]} onClick={toggleModal}>
            continue
          </button>
        </Modal>
      )}

      {showError && (
        <h2 className={styles["red"]}>Error: Piece Not Submitted</h2>
      )}
    </section>
  );
}

export default UploadPage;
