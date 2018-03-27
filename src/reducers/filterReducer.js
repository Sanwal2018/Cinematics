import { FILTER_MOVIES } from "../actions/";

let defaultState = { data: [] };
export default (filterMovieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_MOVIES:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
