import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMemoryAsync } from "../../redux/actions/memoriesActions";
import styles from "./AddMemory.module.css";

const AddMemory = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(
    "https://blog.hootsuite.com/wp-content/uploads/2017/10/snapchat-memories-940x470.jpg"
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setdescription(e.target.value);
  };

  const handleImgChange = (e) => {
    setImage(e.target.value);
  };

  const addMemoryHandler = () => {
    const memoryToAdd = {
      title,
      description,
    };
    dispatch(addMemoryAsync(memoryToAdd));
    history.push("/memories");
  };

  return (
    <section>
      <button>Go Back</button>
      <h1>Add a memory</h1>
      <form onSubmit={addMemoryHandler} className={styles.form}>
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
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddMemory;
