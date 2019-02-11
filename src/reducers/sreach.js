import * as types from './../constants/ActionTypes'

var initialState = '';
var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SREACH:
        return action.sreach;
        default:
          return state;
    }
};

export default myReducer;
