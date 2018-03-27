import {
  ONTHEAIR,
  AIRINGTODAY,
  POPULAR,
  TOP_RATED,
  ERROR
} from "../actions/tvActions";
let defaultState = { data: [] };
export default (tvReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AIRINGTODAY:
      return {
        ...state,
        airingtoday: action.payload
      };
    case ONTHEAIR:
      return {
        ...state,
        ontheair: action.payload
      };
    case TOP_RATED:
      return {
        ...state,
        toprated: action.payload
      };
    case POPULAR:
      return {
        ...state,
        popular: action.payload
      };
    case ERROR:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
