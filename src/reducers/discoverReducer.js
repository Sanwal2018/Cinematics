import {DISCOVER} from '../actions/discoverActions';
let defaultState = {data:[]};
export default discoverReducer = (state = defaultState, action) => {
      switch (action.type) {
            case DISCOVER:
                  return {
                        ...state,
                        data:action.payload
                  }
            default:
                  return { 
                      ...state
                   }
      }
}