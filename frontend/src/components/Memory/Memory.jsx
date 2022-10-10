import React from "react";
import styles from "./Memory.module.css";

const Memory = ({ data }) => {
  const { imageSrc, title, description } = data;
  return (
    <article className={styles.memory}>
      <section>
        <img src={imageSrc} alt="memory" />
      </section>
      <section>
        <p>{title}</p>
        <p>{description}</p>
      </section>
      <section>Actions</section>
    </article>
  );
};

export default Memory;
