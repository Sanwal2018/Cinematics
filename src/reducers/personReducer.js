import { PERSON_FOUND, ERROR } from "../actions/popularAction";
let defaultState = { data: [] };
export default (personReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PERSON_FOUND:
      return {
        ...state,
        data: action.payload
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
