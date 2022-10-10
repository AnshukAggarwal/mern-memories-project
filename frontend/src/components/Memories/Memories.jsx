import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Memory from "../Memory/Memory";
import styles from "./Memories.module.css";
import { fetchProductsAsync } from "../../redux/actions/memoriesActions";

const Memories = () => {
  // const [memories, setMemories] = useState([]);

  // const fetchMemories = async () => {
  //   const { data } = await axios.get("http://localhost:5000/memories");
  //   setMemories(data);
  // };

  // useEffect(() => {
  //   fetchMemories();
  // }, []);

  const { memories } = useSelector((state) => state.memories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);
  return (
    <div>
      <h2>Memories</h2>
      <section className={styles.memories}>
        {memories.map((memory) => (
          <Memory data={memory} key={memory._id} />
        ))}
      </section>
    </div>
  );
};

export default Memories;
