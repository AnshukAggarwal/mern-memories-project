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
  //const [memoriesPerPage] = useState(2);
  const { memories, loading, totalPages } = useSelector(
    (state) => state.memories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(totalPages);
    dispatch(fetchMemoriesAsync(pageNumber));
  }, [dispatch, pageNumber, totalPages]);

  // Get current posts
  // const indexOfLastMemory = currentPage * memoriesPerPage;
  // const indexOfFirstMemory = indexOfLastMemory - memoriesPerPage;
  // const currentMemories = memories.slice(indexOfFirstMemory, indexOfLastMemory);

  //change page #
  const paginate = (number) => setPageNumber(number);

  return (
    <div className={styles.memories_container}>
      <h2>Memories</h2>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.memories}>
          <Pagination totalPages={totalPages} paginate={paginate} />
          <SearchMemories />
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
