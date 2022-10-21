import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMemoryAsync,
  updateMemoryAsync,
} from "../../redux/actions/memoriesActions";
import FileBase64 from "react-file-base64";
import styles from "./EditMemory.module.css";
import Loader from "../../UI/Loader/Loader";

const EditMemory = () => {
  const { id } = useParams();
  //console.log(id);
  const { selectedMemory, loading } = useSelector((state) => state.memories);
  //console.log(selectedMemory);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMemoryAsync(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (selectedMemory) {
      setTitle(selectedMemory.title);
      setdescription(selectedMemory.description);
      setImage(selectedMemory.imageSrc);
    }
  }, [selectedMemory]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    setdescription(e.target.value);
  };

  const handleImgChange = ({ base64 }) => {
    // if (!base64) {
    //   setImage(selectedMemory.imageSrc);
    // } else {
    //   setImage(base64);
    // }
    setImage(base64);
  };

  const updateMemoryHandler = (e) => {
    e.preventDefault();
    const updatedMemory = {
      title,
      description,
      image,
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
        <Loader />
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
            <div className={styles["memory_img_container"]}>
              <img src={selectedMemory.imageSrc} alt="memory" />
            </div>
            <div className={styles["form-control"]}>
              <label>Image</label>
              <FileBase64
                type="file"
                multiple={false}
                onDone={handleImgChange}
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
