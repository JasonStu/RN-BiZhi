

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
        case types.FETCH_HOME_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })
            
        case types.RECEIVE_HOME_LIST:
        
            // console.log(action);

            return Object.assign({}, state, {
                ClassDetialList: state.isLoadMore ? state.ClassDetialList.concat(action.homeList) : action.homeList,

                isRefreshing: false,
                isLoading: false,
            })

        case types.RESET_STATE:
            return Object.assign({},state,{
                ClassDetialList:[],
                isLoading:true,
            })
        default:
            return state;
    }
}

export default classDetialReducer;
