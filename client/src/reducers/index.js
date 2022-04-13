import { combineReducers } from "redux";
// reducers are functions that take current state and an action as argument and return a new state result
import posts from "./posts";

export default combineReducers({
  posts,
});
