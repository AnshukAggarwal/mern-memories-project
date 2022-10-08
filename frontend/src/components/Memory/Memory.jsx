import React from "react";
import styles from "./Memory.module.css";

const Memory = ({ data }) => {
  console.log(data);
  return (
    <article className={styles.memory}>
      <section>
        <img src={data.image} />
      </section>
      <section>Title and Description</section>
      <section>Actions</section>
    </article>
  );
};

export default Memory;
