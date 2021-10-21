import React, { useEffect, useState } from "react";

import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";

import { useForm } from "react-hook-form";

import styles from "./UploadForm.module.css";

function UploadForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [textStyles, setTextStyles] = useState({});

  function alignCenterClick() {
    setTextStyles((prevState) => {
      return {
        textAlign: "center",
      };
    });
  }

  function alignRightClick() {
    setTextStyles((prevState) => {
      return {
        textAlign: "end",
      };
    });
  }

  function alignLeftClick() {
    setTextStyles((prevState) => {
      return {
        textAlign: "start",
      };
    });
  }

  function alignJustifyContent() {
    setTextStyles((prevState) => {
      return {
        textAlign: "justify",
      };
    });
  }

  useEffect(() => {
    props.updateStyles(textStyles);
  }, [textStyles]);

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className={styles["form"]}>
      <div className={styles["input-div"]}>
        <label>Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          onChange={props.onTitleChange}
          value={props.title}
        ></input>
        {errors.title && (
          <p className={styles["error"]}>You must include a title</p>
        )}
      </div>
      <div className={styles["input-div"]}>
        <label>Text of Piece</label>
        <textarea
          rows={15}
          cols={40}
          {...register("piece_text", { required: true })}
          onChange={props.onContentChange}
          value={props.content}
        ></textarea>
        {errors.piece_text && (
          <p className={styles["error"]}>You must include some text</p>
        )}
      </div>
      <div className={styles["align-btns"]}>
        <FaAlignJustify
          size={30}
          onClick={alignJustifyContent}
          className={`${styles["icon"]} ${
            textStyles.textAlign === "justify" && styles["selected"]
          }`}
        />
        <FaAlignCenter
          size={30}
          onClick={alignCenterClick}
          className={`${styles["icon"]} ${
            textStyles.textAlign === "center" && styles["selected"]
          }`}
        />
        <FaAlignLeft
          size={30}
          onClick={alignLeftClick}
          className={`${styles["icon"]} ${
            textStyles.textAlign === "start" && styles["selected"]
          }`}
        />
        <FaAlignRight
          size={30}
          onClick={alignRightClick}
          className={`${styles["icon"]} ${
            textStyles.textAlign === "end" && styles["selected"]
          }`}
        />
      </div>
      <div className={`${styles["input-div"]} ${styles["checkbox-input"]}`}>
        <label>
          Upload Anonymously
          <input type="checkbox" onClick={props.toggleAnon} />
        </label>
      </div>
      <div className={styles["input-div"]}>
        <button className={styles["button"]} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default UploadForm;
