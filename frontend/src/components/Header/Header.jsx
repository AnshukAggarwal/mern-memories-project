import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>My Memories</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/memories/add" className="btn">
              Create a memory
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
