import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Memory from "../Memory/Memory";
import Loader from "../../UI/Loader/Loader";
import styles from "./Memories.module.css";
import { fetchMemoriesAsync } from "../../redux/actions/memoriesActions";
import SearchMemories from "../SearchMemories/SearchMemories";
import Pagination from "../Pagination/Pagination";

const Memories = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const { memories, loading, totalPages } = useSelector(
    (state) => state.memories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Memories";
  }, []);

  // useEffect(() => {
  //   if (searchTerm === "") {
  //     dispatch(fetchMemoriesAsync(pageNumber, "none"));
  //   } else {
  //     const getMemories = setTimeout(() => {
  //       dispatch(fetchMemoriesAsync(pageNumber, searchTerm));
  //     }, 3000);
  //     return () => clearTimeout(getMemories);
  //   }
  // }, [dispatch, pageNumber, searchTerm]);

  useEffect(() => {
    dispatch(fetchMemoriesAsync(pageNumber, searchTerm));
  }, [dispatch, pageNumber]);

  //change page #
  const paginate = (number) => setPageNumber(number);

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchMemoriesHandler = () => {
    dispatch(fetchMemoriesAsync(pageNumber, searchTerm));
  };

  return (
    <div className={styles.memories_container}>
      <h2>Memories</h2>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.memories}>
          <Pagination totalPages={totalPages} paginate={paginate} />
          <SearchMemories
            searchTerm={searchTerm}
            searchTermHandler={searchTermHandler}
            searchMemoriesHandler={searchMemoriesHandler}
          />
          {memories.map((memory) => (
            <Memory data={memory} key={memory._id} />
          ))}
          <Pagination totalPages={totalPages} paginate={paginate} />
        </section>
      )}
    </div>
  );
};

export default Memories;
