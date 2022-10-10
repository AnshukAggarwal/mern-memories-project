import axios from "axios";

export const fetchProductsAsync = () => {
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

// export const fetchMemories = () => ({
//   type: "FETCH_MEMORIES",
// });
