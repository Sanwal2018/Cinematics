import { SEARCH_RESULTS, IMAGE_FOUND } from '../actions/';
let defaultState = { data: [] };
export default searchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCH_RESULTS:
                  return {
                        ...state,
                        data: action.payload
                  }
            case IMAGE_FOUND:
                  return {
                        ...state,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}
