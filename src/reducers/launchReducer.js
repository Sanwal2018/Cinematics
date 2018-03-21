import { LAUNCH, ERROR } from '../actions/';
let defaultState = { loading: true, data: [] };
export default launchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case LAUNCH:
                  return {
                        ...state,
                        loading: false,
                  }
            case ERROR:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}