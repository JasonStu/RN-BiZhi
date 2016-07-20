

import * as types from './actionTypes';
import Util from '../common/utils';

export let ClassAction = (isLoading) => {
    let URL = 'http://api.huaban.com/fm/wallpaper/tags';
    return dispatch => {
        dispatch(feachClassList(isLoading));
        return Util.get(URL,(response) => {
            // console.log(response);
            dispatch(receiveClassList(response));
        },(error) => {
            // console.log('分类数据error==>' + error);
            dispatch(receiveClassList([]));
        });
    }
}

let feachClassList = (isLoading) => {
    return {
        type: types.FETCH_CLASS_LIST,
        isLoading: isLoading,
    }
}

let receiveClassList = (classList) => {
    return {
        type: types.RECEIVE_CLASS_LIST,
        classList: classList,
    }
}