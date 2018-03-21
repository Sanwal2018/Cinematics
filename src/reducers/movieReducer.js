import {
      NOWPLAYING,TOP_RATED, UPCOMING, ANTICIPATED
} from '../actions/';

let defaultState = { loading: true, data: [] };
export default movieReducer = (state = defaultState, action) => {
      //console.log("Actions : ", action.payload)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            case TOP_RATED:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            case UPCOMING:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            case ANTICIPATED:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}


