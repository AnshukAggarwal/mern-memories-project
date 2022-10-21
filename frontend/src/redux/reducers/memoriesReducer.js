const INITIAL_STATE = {
  memories: [],
  loading: false,
  error: null,
  selectedMemory: {},
};

const memoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MEMORIES_START":
      return { ...state, loading: true };
    case "FETCH_MEMORIES_SUCCESS":
      return { ...state, loading: false, memories: action.payload };
    case "FETCH_MEMORIES_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_MEMORY_START":
      return { ...state, loading: true };
    case "FETCH_MEMORY_SUCCESS":
      return { ...state, loading: false, selectedMemory: action.payload };
    case "FETCH_MEMORY_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_MEMORY_START":
      return { ...state, loading: true };
    // case "DELETE_MEMORY_SUCCESS":
    //   return {
    //     ...state,
    //     loading: false,
    //     memories: state.memories.filter(
    //       (item) => item._id !== action.payload._id
    //     ),
    //   };
    case "DELETE_MEMORY_SUCCESS":
      return {
        ...state,
        loading: false,
        memories: action.payload,
      };
    case "DELETE_MEMORY_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "ADD_MEMORY":
      return {
        ...state,
        memories: action.payload,
      };
    case "UPDATE_MEMORY":
      return {
        ...state,
        memories: action.payload,
      };
    case "SEARCH_MEMORY":
      return {
        ...state,
        memories: action.payload,
      };
    default:
      return state;
  }
};

export default memoriesReducer;
