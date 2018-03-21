import { SEARCH_RESULTS, IMAGE_FOUND } from '../actions/';
let defaultState = { loading: true, data: [] };
export default searchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCH_RESULTS:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            case IMAGE_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}
