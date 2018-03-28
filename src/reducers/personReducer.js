import {
  PERSON_FOUND,
  ERROR,
  PERSON_IMAGE_FOUND,
  PERSON_DETAIL_FOUND,
  MOVIE_FOUND,
  TV_FOUND
} from "../actions/popularAction";
let defaultState = { data: [] };
export default (personReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PERSON_FOUND:
      return {
        ...state,
        data: action.payload
      };
    case PERSON_IMAGE_FOUND:
      return {
        ...state,
        data1: action.payload
      };
    case PERSON_DETAIL_FOUND:
      return {
        ...state,
        data2: action.payload
      };
    case ERROR:
      return {
        ...state,
        data3: action.payload
      };
    case MOVIE_FOUND:
      return {
        ...state,
        data4: action.payload
      };
      case TV_FOUND:
      return {
        ...state,
        data5: action.payload
      };
    default:
      return { ...state };
  }
});
