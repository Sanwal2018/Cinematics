import { combineReducers } from 'redux';
import launchReducer from './launchReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import detailReducer from './detailReducer';
import castReducer from './castReducer';
import reviewReducer from './reviewReducer';
import tvReducer from './tvReducer';
export default rootReducer = combineReducers(
      {
            launchReducer,
            movieReducer,
            searchReducer,
            detailReducer,
            castReducer,
            reviewReducer,
            tvReducer
      })
