import axios from "axios";
import {
  FETCH_MEMORIES_START,
  FETCH_MEMORIES_SUCCESS,
  FETCH_MEMORIES_FAIL,
  FETCH_MEMORY_START,
  FETCH_MEMORY_SUCCESS,
  FETCH_MEMORY_FAIL,
  DELETE_MEMORY_START,
  DELETE_MEMORY_SUCCESS,
  DELETE_MEMORY_FAIL,
  ADD_MEMORY_START,
  ADD_MEMORY_SUCCESS,
  ADD_MEMORY_FAIL,
  UPDATE_MEMORY,
} from "../constants/memoriesConstants";

//const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchMemoriesAsync = (pageNumber, searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MEMORIES_START });
      const { data } = await axios.get(
        `/memories?query=${searchTerm || "none"}&page=${pageNumber}`
      );
      dispatch({ type: FETCH_MEMORIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MEMORIES_FAIL, payload: error.message });
    }
  };
};

export const fetchMemoryAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_MEMORY_START });
      const { data } = await axios.get(`/memories/${id}`);
      dispatch({ type: FETCH_MEMORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_MEMORY_FAIL, payload: error.message });
    }
  };
};

export const deleteMemoryAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_MEMORY_START });
      const { data } = await axios.delete(`/memories/delete/${id}`);
      dispatch({ type: DELETE_MEMORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_MEMORY_FAIL, payload: error.message });
    }
  };
};

export const addMemoryAsync = (memory) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_MEMORY_START });
      const { data } = await axios.post("/memories/add", memory);
      dispatch({ type: ADD_MEMORY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_MEMORY_FAIL, payload: error.message });
    }
  };
};

export const updateMemoryAsync = (memory, id) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/memories/edit/${id}`, memory);
    dispatch({ type: UPDATE_MEMORY, payload: data });
  };
};

// export const searchMemoriesAsync = (searchTerm) => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`/memories/search/${searchTerm}`);
//     console.log(data);
//     dispatch({ type: "SEARCH_MEMORY", payload: data });
//   };
// };
