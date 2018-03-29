import { LAUNCH,GENRES, ERROR } from "../actions/";
import { DRAWER } from "../actions/discoverActions";
let defaultState = { data: [], position: "left" };
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
    case DRAWER:
      return {
        ...state,
        position: action.payload
      };
    case GENRES:
      return {
        ...state,
        genres:action.payload
      };
    default:
      return { ...state };
  }
});
