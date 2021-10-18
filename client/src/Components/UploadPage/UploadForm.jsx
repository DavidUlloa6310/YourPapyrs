import React from "react";

import styles from "./UploadForm.module.css";

import { useForm } from "react-hook-form";

function UploadForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className={styles["form"]}>
      <div className={styles["input-div"]}>
        <label>Title</label>
        <input type="text" {...register("title", { required: true })}></input>
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
        ></textarea>
        {errors.piece_text && (
          <p className={styles["error"]}>You must include some text</p>
        )}
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
