




import * as types from '../actions/actionTypes';

const initialState = {
    ClassDate:[],
    isLoading:true,
};

let classReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case types.FETCH_CLASS_LIST:
            return Object.assign({}, state, {
                ...state,
            })

         case types.RECEVIE_CLASS_LIST:
            return Object.assign({},state,{
                ClassDate:action.classList,
                isLoading:false,
            })
    
        default:
            return state;
    }

}

export default classReducer;