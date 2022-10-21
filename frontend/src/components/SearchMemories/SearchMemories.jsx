import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMemoriesAsync } from "../../redux/actions/memoriesActions";
import styles from "./SearchMemories.module.css";

const SearchMemories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchMemoriesHandler = () => {
    dispatch(searchMemoriesAsync(searchTerm));
  };
  return (
    <section className={styles.search}>
      <input
        type="search"
        placeholder="search memories"
        name="searchTerm"
        value={searchTerm}
        onChange={searchTermHandler}
      />
      <button onClick={searchMemoriesHandler}>Search</button>
    </section>
  );
};

export default SearchMemories;