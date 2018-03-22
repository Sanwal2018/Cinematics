import {
      NOWPLAYING,TOP_RATED, UPCOMING, ANTICIPATED
} from '../actions/';
var re_state={};
let defaultState = { loading: true, data: [] };
export default movieReducer = (state = defaultState, action) => {
      //console.log("Actions : ", action.payload)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        nowplaying: action.payload
                  }
            case TOP_RATED:
                  return {
                        ...state,
                        loading: false,
                        toprated: action.payload
                  }
            case UPCOMING:
                  return {
                        ...state,
                        loading: false,
                        upcoming: action.payload
                  }
            case ANTICIPATED:
                  return {
                        ...state,
                        loading: false,
                        anticipated: action.payload
                  }
            default:
                  return { ...state }
      }
}


