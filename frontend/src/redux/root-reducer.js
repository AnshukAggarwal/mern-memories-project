import { combineReducers } from "redux";

import memoriesReducer from "./reducers/memoriesReducer";

const rootReducer = combineReducers({
  memories: memoriesReducer,
});

export default rootReducer;
