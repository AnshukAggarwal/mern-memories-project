import React from "react";
import styles from "./SearchMemories.module.css";

const SearchMemories = ({
  searchTerm,
  searchTermHandler,
  searchMemoriesHandler,
}) => {
  //debouncing
  // useEffect(() => {
  //   if (searchTerm) {
  //     const getData = setTimeout(() => {
  //       dispatch(searchMemoriesAsync(searchTerm));
  //     }, 2000);
  //     return () => clearTimeout(getData);
  //   }
  // }, [dispatch, searchTerm]);

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
