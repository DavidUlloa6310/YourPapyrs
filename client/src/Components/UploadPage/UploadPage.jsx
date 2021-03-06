import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Piece from "../Shared/Piece";
import Card from "../Shared/UI/Card";
import Modal from "../Shared/UI/Modal";
import UploadForm from "./UploadForm";
import { getLink } from "../../helpers/link";
import { Redirect } from "react-router";

import styles from "./UploadPage.module.css";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../helpers/AuthContext";

function UploadPage(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAnon, setIsAnon] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [textStyles, setTextStyles] = useState({});

  const { auth, setAuth } = useContext(AuthContext);

  async function submitHandler(event) {
    event.preventDefault();

    if (!title || !content) {
      return toast.error(
        "You must include the text of your piece and its title."
      );
    }

    try {
      setLoading(true);
      await axios.post(
        getLink() + "/pieces",
        {
          userId: auth.user._id,
          piece: {
            title,
            text: content,
            author: isAnon ? "Anonymous" : auth.user.name,
            authorId: isAnon ? null : auth.user._id,
          },
        },
        {
          headers: {
            token: auth.token,
          },
        }
      );
      setShowModal(true);
      setTitle("");
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

  if (!auth) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <section className={styles["page"]}>
      <ToastContainer />
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
          author={isAnon ? "Anonymous" : auth.user.name}
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
