import { FILTER } from '../actions/';

let defaultState = { data: [] };
export default filterReducer = (state = defaultState, action) => {
      switch (action.type) {
            case FILTER:
            return {
                  ...state,
                  data: action.payload
            }
            default:
                  return { ...state }
      }
}
