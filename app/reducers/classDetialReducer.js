

import * as types from '../actions/actionTypes';

const initialState = {
    ClassDetialList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
};

let classDetialReducer = (state = initialState, action) => {
    // console.log(action)
    
    switch (action.type) {
        case types.FETCH_CLASSDITAL_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })
            
        case types.RECEIVE_CLASSDITAL_LIST:
        
            // console.log(action);
            // debugger

            return Object.assign({}, state, {
                ClassDetialList: state.isLoadMore ? state.ClassDetialList.concat(action.calssDitalList) : action.calssDitalList,
                isRefreshing: false,
                isLoading: false,
            })

        case types.RESET_CLASSDITAL_STAT:
            return Object.assign({},state,{
                ClassDetialList:[],
                isLoading:true,
            })
        default:
            return state;
    }
}

export default classDetialReducer;
