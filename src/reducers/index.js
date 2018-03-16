import { LAUNCH, NOWPLAYING, ERROR } from '../actions/';
import { combineReducers } from 'redux';

let defaultState = { loading: true, data: [] };
const launchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case LAUNCH:
                  return {
                        ...state,
                        loading: false
                  }
            case ERROR:
                  return {
                        ...state,
                        loading: false,
                        data: action.paylaod
                  }
            default:
                  return { ...state }
      }
}

const movieReducer = (state = defaultState, action) => {
      console.log("Actions : ",action.paylaod)
      switch (action.type) {
            case NOWPLAYING:
                  return {
                        ...state,
                        loading: false,
                        data: action.paylaod
                  }
            default:
                  return { ...state }
      }
}

const rootReducer = combineReducers(
      {
            launchReducer,
            movieReducer

      })

export default rootReducer;