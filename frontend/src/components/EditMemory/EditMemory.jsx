import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMemoryAsync } from "../../redux/actions/memoriesActions";

const EditMemory = () => {
  const { selectedMemory, loading } = useSelector((state) => state.memories);
  console.log(selectedMemory);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMemoryAsync(id));
  }, [dispatch, id]);
  return (
    <>
      <button>Go Back</button>
      {loading ? <p>Loading...</p> : <h2>Edit Memory</h2>}
    </>
  );
};

export default EditMemory;
