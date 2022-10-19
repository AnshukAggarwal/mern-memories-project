import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMemoryAsync } from "../../redux/actions/memoriesActions";
import styles from "./Memory.module.css";
import DeleteModal from "../../UI/DeleteModal/DeleteModal";

const Memory = ({ data }) => {
  const { imageSrc, title, description, _id } = data;
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  const deleteMemoryConfirm = () => {
    setShowModal(false);
    dispatch(deleteMemoryAsync(_id));
  };

  return (
    <>
      <article className={styles.memory}>
        <section className={styles["memory_img_container"]}>
          <img src={imageSrc} alt="memory" />
        </section>
        <section>
          <p>{title}</p>
          <p>{description}</p>
        </section>
        <section className={styles["memory_actions"]}>
          <button className={styles.btn}>
            <Link to={`/memories/edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={toggleShowModal} className={styles.btn}>
            Delete
          </button>
        </section>
      </article>
      {showModal && (
        <DeleteModal
          name={title}
          hideModal={toggleShowModal}
          deleteMemory={deleteMemoryConfirm}
        />
      )}{" "}
    </>
  );
};

export default Memory;
