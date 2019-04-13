import {GET_MOVIES, ADD_MOVIE, CLEAR_MOVIES} from "../constants/moviesActionTypes";

export default (state = "", action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_MOVIES:
      return [...state, payload];
    case ADD_MOVIE:
      return [payload, ...state];
    case CLEAR_MOVIES:
      return "";
    default:
      return state;
  }
};