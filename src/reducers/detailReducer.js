import { INFO_FOUND } from '../actions/';
let defaultState = { loading: true, data: [] };
export default detailReducer = (state = defaultState, action) => {
      switch (action.type) {
            case INFO_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}
