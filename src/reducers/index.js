import { combineReducers } from 'redux';
import launchReducer from './launchReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import castReducer from './castReducer';
import reviewReducer from './reviewReducer';
import tvReducer from './tvReducer';
import personReducer from './personReducer';
import discoverReducer from './discoverReducer';
import filterReducer from './filterReducer';
import {LISTVIEWUPDATE} from '../actions/';
let defaultState = { isListSingleRow: true};
listReducer = (state = defaultState, action) => {
      switch (action.type) {
            case LISTVIEWUPDATE:
                  return {
                        ...state,
                        isListSingleRow: !state.isListSingleRow,
                  }
            default:
                  return { 
                        isListSingleRow:state.isListSingleRow
                   }
      }
}
export default rootReducer = combineReducers(
      {
            launchReducer,
            movieReducer,
            searchReducer,
            detailReducer,
            castReducer,
            reviewReducer,
            tvReducer,
            listReducer,
            personReducer,
            discoverReducer,
            filterReducer
      })
