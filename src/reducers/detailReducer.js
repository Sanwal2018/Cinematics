import { INFO_FOUND } from "../actions/";
let defaultState = { data: [] };
export default (detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INFO_FOUND:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
