import { CAST_FOUND } from '../actions/';
let defaultState = { loading: true, data: [] };
export default castReducer = (state = defaultState, action) => {
      switch (action.type) {

            case CAST_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}
