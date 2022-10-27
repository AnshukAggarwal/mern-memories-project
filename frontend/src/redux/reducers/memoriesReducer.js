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

const INITIAL_STATE = {
  memories: [],
  loading: false,
  error: null,
  selectedMemory: {},
  totalPages: 0,
};

const memoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MEMORIES_START:
      return { ...state, loading: true };
    case FETCH_MEMORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        memories: action.payload.memories,
        totalPages: action.payload.totalPages,
      };
    case FETCH_MEMORIES_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FETCH_MEMORY_START:
      return { ...state, loading: true };
    case FETCH_MEMORY_SUCCESS:
      return { ...state, loading: false, selectedMemory: action.payload };
    case FETCH_MEMORY_FAIL:
      return { ...state, loading: false, error: action.payload };
    case DELETE_MEMORY_START:
      return { ...state, loading: true };
    // case "DELETE_MEMORY_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     memories: state.memories.filter(
    //       (item) => item._id !== action.payload._id
    //     ),
    //   };
    case DELETE_MEMORY_SUCCESS:
      return {
        ...state,
        loading: false,
        memories: action.payload.memories,
        totalPages: action.payload.totalPages,
      };
    case DELETE_MEMORY_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_MEMORY_START:
      return { ...state, loading: true };
    case ADD_MEMORY_SUCCESS:
      return {
        ...state,
        memories: action.payload.memories,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case ADD_MEMORY_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_MEMORY:
      return {
        ...state,
        memories: action.payload.memories,
        totalPages: action.payload.totalPages,
      };

    default:
      return state;
  }
};

export default memoriesReducer;
