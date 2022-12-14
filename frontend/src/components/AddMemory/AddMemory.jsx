import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link, Prompt } from "react-router-dom";
import { addMemoryAsync } from "../../redux/actions/memoriesActions";
import FileBase64 from "react-file-base64";
import styles from "./AddMemory.module.css";

const AddMemory = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.title = "Add Memory";
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsAdding(e.target.value.length > 0);
  };

  const handleDescChange = (e) => {
    setdescription(e.target.value);
    setIsAdding(e.target.value.length > 0);
  };

  const handleImgChange = ({ base64 }) => {
    setImage(base64);
  };

  const addMemoryHandler = (e) => {
    e.preventDefault();
    const memoryToAdd = {
      title,
      description,
      image,
    };
    dispatch(addMemoryAsync(memoryToAdd));
    history.push("/memories");
    // if (!title || !description || !image) {
    //   alert("Please fill out all fields");
    // } else {
    //   const memoryToAdd = {
    //     title,
    //     description,
    //     image,
    //   };
    //   dispatch(addMemoryAsync(memoryToAdd));
    //   history.push("/memories");
    // }
  };

  const isAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <section>
      <Link to="/memories" className="btn">
        Back to List
      </Link>
      <h1>Add a memory</h1>
      <form onSubmit={addMemoryHandler} className={styles.form}>
        <Prompt
          when={isAdding}
          message={"Are you sure you want to leave. You have unsaved data?"}
        />
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
          <FileBase64 type="file" multiple={false} onDone={handleImgChange} />
        </div>
        <div className={styles["form-btn"]}>
          <button onClick={isAddingHandler}>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default AddMemory;
