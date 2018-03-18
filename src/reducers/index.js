import { LAUNCH, ERROR, LISTDATA } from '../actions/';
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
                        data: action.paylaod
                  }
            default:
                  return { ...state }
      }
}

const listReducer = (state = defaultState, action) => {
      console.log("Actions : ",action.paylaod)
      switch (action.type) {
            case LISTDATA:
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
            listReducer

      })

export default rootReducer;