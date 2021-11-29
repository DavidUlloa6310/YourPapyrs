import React, { useState } from "react";
import axios from "axios";
import Piece from "../Shared/Piece";
import Card from "../Shared/UI/Card";
import Modal from "../Shared/UI/Modal";

import UploadForm from "./UploadForm";

import styles from "./UploadPage.module.css";

function UploadPage(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isAnon, setIsAnon] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [textStyles, setTextStyles] = useState({});

  async function submitHandler(data) {
    setLoading(true);
    try {
      let apiURL;
      if (process.env.REACT_APP_DEVELOPMENT) {
        apiURL = `${process.env.REACT_APP_LOCALHOST_URL}/api/v1/pieces`;
      } else {
        apiURL = `${process.env.REACT_APP_PRODUCTION_URL}/api/v1/pieces`;
      }

      // const response = await fetch(apiURL, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     title: title,
      //     text: content,
      //     author: isAnon || author === "" ? "Anonymous" : author,
      //   }),
      // });

      axios.post(apiURL, {
        title,
        text: content,
        author: isAnon || author === "" ? "Anonymous" : author,
      });

      setShowModal(true);
      setTitle("");
      setAuthor("");
      setContent("");
      setIsAnon(false);
    } catch (err) {
      setShowError(true);
    }

    setLoading(false);
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

  function authorHandler(event) {
    setAuthor(event.target.value);
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

  if (loading) {
    return (
      <section className={styles["page"]}>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className={styles["page"]}>
      <UploadForm
        onSubmit={submitHandler}
        onTitleChange={titleHandler}
        onContentChange={contentHandler}
        onAuthorChange={authorHandler}
        updateStyles={updateStyles}
        content={content}
        title={title}
        author={author}
        toggleAnon={anonHandler}
      ></UploadForm>
      <Card className={styles["card"]}>
        <Piece
          content={content}
          author={isAnon || author === "" ? "Anonymous" : author}
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
        <Modal onClick={toggleError}>
          <h2 style={{ color: "red" }}>Error: Piece Not Submitted</h2>
          <button className={styles["button_error"]} onClick={toggleError}>
            Okay
          </button>
        </Modal>
      )}
    </section>
  );
}

export default UploadPage;
