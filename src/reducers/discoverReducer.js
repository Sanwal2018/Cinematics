import {DISCOVER} from '../actions/discoverActions';
let defaultState = {loading:true};
export default discoverReducer = (state = defaultState, action) => {
      switch (action.type) {
            case DISCOVER:
                  return {
                        ...state,
                        isListSingleRow: !state.isListSingleRow,
                        loading:false
                  }
            default:
                  return { 
                      ...state
                   }
      }
}