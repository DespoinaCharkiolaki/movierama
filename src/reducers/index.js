import {combineReducers} from "redux";
import UserReducer from "./UserReducer";
import MoviesReducer from "./MoviesReducer";
//import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  movies: MoviesReducer
});

export default rootReducer;
