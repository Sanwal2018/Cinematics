import { LAUNCH, NOWPLAYING, ERROR, SEARCH_RESULTS, IMAGE_FOUND, INFO_FOUND, REVIEW_FOUND, CAST_FOUND } from '../actions/';
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
      //console.log("Actions : ", action.payload)
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
            case IMAGE_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}


const detailReducer = (state = defaultState, action) => {
      switch (action.type) {
            case INFO_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const castReducer = (state = defaultState, action) => {
      switch (action.type) {

            case CAST_FOUND:
                  return {
                        ...state,
                        loading: false,
                        data: action.payload
                  }
            default:
                  return { ...state }
      }
}

const reviewReducer = (state = defaultState, action) => {
      switch (action.type) {
           
            case REVIEW_FOUND:
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
            searchReducer,
            detailReducer,
            castReducer,
            reviewReducer

      })

export default rootReducer;