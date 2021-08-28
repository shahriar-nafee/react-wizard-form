import { combineReducers } from "redux";
import gameReducer from "./formReducer";

export default combineReducers({
  game: gameReducer,
});
