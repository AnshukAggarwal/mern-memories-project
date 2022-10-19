import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <section className={styles.home}>
      <section>
        <p className={styles.intro}>
          This is an application where a user can store his/her memories. These
          can be cherished in the future. I hope you have as much fun using it
          as I had making it.
        </p>
      </section>
      <Link to="/memories" className="btn">
        View Memories
      </Link>
    </section>
  );
};

export default Homepage;
