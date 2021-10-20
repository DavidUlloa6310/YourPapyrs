import React, { useState } from "react";
import Piece from "../Shared/Piece";
import Backdrop from "../Shared/UI/Backdrop";
import Drawer from "../Shared/UI/Drawer";
import Card from "../Shared/UI/Card";

import UploadForm from "./UploadForm";

import styles from "./UploadPage.module.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function UploadPage(props) {
  function submitHandler(data) {
    console.log(data);
  }

  const [showDrawer, setShowDrawer] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Anonymous");

  function toggleShowDrawer() {
    setShowDrawer((prevState) => !prevState);
  }

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function contentHandler(event) {
    setContent(event.target.value);
  }

  const drawerStyle = {
    width: "50%",
  };

  return (
    <section className={styles["page"]}>
      <UploadForm
        onSubmit={submitHandler}
        onTitleChange={titleHandler}
        onContentChange={contentHandler}
        content={content}
        title={title}
      ></UploadForm>
      <Card className={styles["card"]}>
        <Piece content={content} author={author} title={title}></Piece>
      </Card>
    </section>
  );
}

export default UploadPage;
