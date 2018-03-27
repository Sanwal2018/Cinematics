import { REVIEW_FOUND } from "../actions/";
let defaultState = { data: [] };
export default (reviewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REVIEW_FOUND:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
