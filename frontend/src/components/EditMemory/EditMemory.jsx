import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMemoryAsync,
  updateMemoryAsync,
} from "../../redux/actions/memoriesActions";
import styles from "./EditMemory.module.css";

const EditMemory = () => {
  const { id } = useParams();
  //console.log(id);
  const { selectedMemory, loading } = useSelector((state) => state.memories);
  //console.log(selectedMemory);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(
    "https://blog.hootsuite.com/wp-content/uploads/2017/10/snapchat-memories-940x470.jpg"
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMemoryAsync(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedMemory) {
      setTitle(selectedMemory.title);
      setdescription(selectedMemory.description);
    }
  }, [selectedMemory]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setdescription(e.target.value);
  };

  const handleImgChange = (e) => {
    setImage(e.target.value);
  };

  const updateMemoryHandler = () => {
    const updatedMemory = {
      title,
      description,
    };

    dispatch(updateMemoryAsync(updatedMemory, id));
    history.push("/memories");
  };
  return (
    <section>
      <Link to="/memories" className="btn">
        Back to List
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Editing details for {selectedMemory.title}</h2>
          <form className={styles.form} onSubmit={updateMemoryHandler}>
            <div className={styles["form-control"]}>
              <label>Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className={styles["form-control"]}>
              <label>Description</label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleDescChange}
              />
            </div>
            <div className={styles["form-control"]}>
              <label>Image</label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                value={image}
                onChange={handleImgChange}
              />
            </div>
            <div className={styles["form-btn"]}>
              <button>Update</button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default EditMemory;
