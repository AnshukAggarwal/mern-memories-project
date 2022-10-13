import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMemoryAsync } from "../../redux/actions/memoriesActions";
import styles from "./Memory.module.css";

const Memory = ({ data }) => {
  const { imageSrc, title, description, _id } = data;

  const dispatch = useDispatch();

  const deleteMemoryHandler = () => {
    dispatch(deleteMemoryAsync(_id));
  };

  return (
    <article className={styles.memory}>
      <section className={styles["memory_img_container"]}>
        <img src={imageSrc} alt="memory" />
      </section>
      <section>
        <p>{title}</p>
        <p>{description}</p>
      </section>
      <section className={styles["memory_actions"]}>
        <button>
          <Link to={`/memories/edit/${_id}`}>Edit</Link>
        </button>
        <button onClick={deleteMemoryHandler}>Delete</button>
      </section>
    </article>
  );
};

export default Memory;
