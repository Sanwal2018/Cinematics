import { LAUNCH } from '../actions/';
import { combineReducers } from 'redux';

let defaultState = { loading: true, data: [] };
const launchReducer = (state = defaultState, action) => {
      switch (action.type) {
            case LAUNCH:
                  return {
                        ...state,
                        loading: false
                  }
            default:
                  return { ...state }
      }
}


const rootReducer = combineReducers(
      {
            launchReducer,

      })

export default rootReducer;