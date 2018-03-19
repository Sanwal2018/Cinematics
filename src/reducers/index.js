import { LAUNCH, NOWPLAYING, ERROR , SEARCH_RESULTS} from '../actions/';
import { combineReducers } from 'redux';

let defaultState = { loading: true, data: [] };
const launchReducer = (state = defaultState, action) => {
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

const movieReducer = (state = defaultState, action) => {
      console.log("Actions : ", action.payload)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const searchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case SEARCH_RESULTS:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const rootReducer = combineReducers(
      {
            launchReducer,
            movieReducer,
            searchReducer

      })

export default rootReducer;