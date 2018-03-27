import { LAUNCH, ERROR } from "../actions/";
let defaultState = { data: [] };
export default (launchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LAUNCH:
      return {
        ...state
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
