import {
      NOWPLAYING,TOP_RATED, UPCOMING, ANTICIPATED
} from '../actions/';
var re_state={};
let defaultState = {data: [] };
export default movieReducer = (state = defaultState, action) => {
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        nowplaying: action.payload
                  }
            case TOP_RATED:
                  return {
                        ...state,
                        toprated: action.payload
                  }
            case UPCOMING:
                  return {
                        ...state,
                        upcoming: action.payload
                  }
            case ANTICIPATED:
                  return {
                        ...state,
                        anticipated: action.payload
                  }
            default:
                  return { ...state }
      }
}


