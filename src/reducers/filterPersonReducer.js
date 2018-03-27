import { FILTER_MOVIES, FILTER_PERSON, FILTER_TV } from "../actions/";

let defaultState = { data: [] };

export default (filterPersonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_PERSON:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
