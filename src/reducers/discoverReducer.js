import { DISCOVER } from "../const/const";
import {FILTER} from "../actions/index";
let defaultState = {
  data: [],
  genre: "",
  from: new Date().getFullYear(),
  to: new Date().getFullYear()
};
export default (discoverReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DISCOVER.DISCOVER:
      return {
        ...state,
        data: action.payload,
      };
    case FILTER:
    console.log(action);
      return {
        ...state,
        data:action.payload.data,
        genre: action.payload.genre,
        from: action.payload.from,
        to: action.payload.to
      };

    default:
      return {
        ...state
      };
  }
});
