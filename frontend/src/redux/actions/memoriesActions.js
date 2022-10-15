import axios from "axios";

export const fetchMemoriesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MEMORIES_START" });
      const { data } = await axios.get("http://localhost:5000/memories");
      dispatch({ type: "FETCH_MEMORIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_MEMORIES_FAIL", payload: error.message });
    }
  };
};

export const fetchMemoryAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MEMORY_START" });
      const { data } = await axios.get(`http://localhost:5000/memories/${id}`);
      dispatch({ type: "FETCH_MEMORY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_MEMORY_FAIL", payload: error.message });
    }
  };
};

export const deleteMemoryAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "DELETE_MEMORY_START" });
      const { data } = await axios.delete(
        `http://localhost:5000/memories/delete/${id}`
      );
      dispatch({ type: "DELETE_MEMORY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "DELETE_MEMORY_FAIL", payload: error.message });
    }
  };
};

export const addMemoryAsync = (memory) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://localhost:5000/memories/add",
      memory
    );
    dispatch({ type: "ADD_MEMORY", payload: data });
  };
};

export const updateMemoryAsync = (memory, id) => {
  return async (dispatch) => {
    const { data } = await axios.put(
      `http://localhost:5000/memories/edit/${id}`,
      memory
    );
    dispatch({ type: "UPDATE_MEMORY", payload: data });
  };
};
