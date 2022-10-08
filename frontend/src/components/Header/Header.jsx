import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>My Memories</h1>
      </div>
      <nav>
        <ul>
          <li>Create a memory</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
