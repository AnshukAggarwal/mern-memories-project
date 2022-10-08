import React from "react";
import memories from "../../memories";
import Memory from "../Memory/Memory";
import styles from "./Memories.module.css";

const Memories = () => {
  return (
    <div>
      <h2>Memories</h2>
      <section className={styles.memories}>
        {memories.map((memory) => (
          <Memory data={memory} key={memory.id} />
        ))}
      </section>
    </div>
  );
};

export default Memories;
