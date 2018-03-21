import { REVIEW_FOUND } from '../actions/';
let defaultState = { loading: true, data: [] };
export default reviewReducer = (state = defaultState, action) => {
      switch (action.type) {

            case REVIEW_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}