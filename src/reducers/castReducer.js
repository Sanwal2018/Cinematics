import { CAST_FOUND } from "../actions/";
let defaultState = { data: [] };
export default (castReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CAST_FOUND:
      return {
        ...state,
        data: action.payload
      };
    default:
      return { ...state };
  }
});
