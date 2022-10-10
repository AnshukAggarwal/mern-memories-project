const INITIAL_STATE = {
  memories: [],
  loading: false,
  error: null,
};

const memoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MEMORIES_START":
      return { ...state, loading: true };
    case "FETCH_MEMORIES_SUCCESS":
      return { ...state, loading: false, memories: action.payload };
    case "FETCH_MEMORIES_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default memoriesReducer;
