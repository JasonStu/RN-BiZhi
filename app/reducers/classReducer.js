
import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate: [],
    isLoading: true,

};

let classReducer = (state = initialState, action) => {
    // console.log(action)
    
    switch (action.type) {
        case types.FETCH_CLASS_LIST:
            return Object.assign({}, state, {
              
                isLoading: action.isLoading
            })
            
        case types.RECEIVE_CLASS_LIST:
        
            // console.log(action);

            return Object.assign({}, state, {
                ClassDate: action.classList,
                isLoading: false,
            })
        default:
            return state;
    }
}

export default classReducer;
