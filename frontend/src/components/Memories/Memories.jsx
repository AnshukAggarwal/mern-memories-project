import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Memory from "../Memory/Memory";
import Loader from "../../UI/Loader/Loader";
import styles from "./Memories.module.css";
import { fetchMemoriesAsync } from "../../redux/actions/memoriesActions";
import SearchMemories from "../SearchMemories/SearchMemories";

const Memories = () => {
  // const [memories, setMemories] = useState([]);

  // const fetchMemories = async () => {
  //   const { data } = await axios.get("http://localhost:5000/memories");
  //   setMemories(data);
  // };

  // useEffect(() => {
  //   fetchMemories();
  // }, []);

  const { memories, loading } = useSelector((state) => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemoriesAsync());
  }, [dispatch]);
  return (
    <div className={styles.memories_container}>
      <h2>Memories</h2>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.memories}>
          <SearchMemories />
          {memories.map((memory) => (
            <Memory data={memory} key={memory._id} />
          ))}
        </section>
      )}
    </div>
  );
};

export default Memories;
