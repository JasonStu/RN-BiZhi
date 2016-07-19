/**
 * Created by ljunb on 16/5/25.
 * 根reducer
 */
import { combineReducers } from 'redux';
import Home from './homeReducer';
import Class from './classReducer';
import ClassDetial from './classDetialReducer';

export default rootReducer = combineReducers({
    Home,
    Class,
    ClassDetial,
})