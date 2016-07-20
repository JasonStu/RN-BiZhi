

import * as types from './actionTypes';
import Util from '../common/utils';

export let classDital = (tag, offest, limit, isLoadMore, isRefreshing, isLoading) => {
    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    if (limit) URL += limit;
    offest ? URL += '&max=' + offest : URL += '&max=';
    tag ? URL += '&tag=' + encode_utf8(tag) : URL += '&tag='
    // console.log(URL)
    // debugger
    return dispatch => {
        dispatch(feachClassDitalList(isLoadMore, isRefreshing, isLoading));
        return Util.get(URL, (response) => {
            //  console.log(response)
            //  debugger
            dispatch(receiveClassDitalList(response.pins))
        }, (error) => {
            // console.log('加载首页数据error==>' + error);
            // // debugger
            dispatch(receiveClassDitalList([]));
        });

    }

}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let feachClassDitalList = (isLoadMore, isRefreshing, isLoading) => {
    return {
        type: types.FETCH_CLASSDITAL_LIST,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveClassDitalList = (calssDitalList) => {
    return {
        type: types.RECEIVE_CLASSDITAL_LIST,
        calssDitalList: calssDitalList,
    }
}
export let resetState = ()=> {
    return {
        type: types.RESET_CLASSDITAL_STATE,
    }
}