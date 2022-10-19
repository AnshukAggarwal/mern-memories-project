import React from "react";
import styles from "./DeleteModal.module.css";
import Card from "../Card/Card";

const DeleteModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.hideModal} />
      <Card class={styles.modal}>
        <section>
          <p>{`Are you sure you want to delete ${props.name}`}</p>
        </section>
        <section>
          <button onClick={props.deleteMemory}>Yes</button>
          <button onClick={props.hideModal}>No</button>
        </section>
      </Card>
    </>
  );
};

export default DeleteModal;
