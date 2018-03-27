import { FILTER_TV } from "../actions/";

let defaultState = { data: [] };

export default (filterTVReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_TV:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
