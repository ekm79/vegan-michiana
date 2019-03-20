import {toggleReducers} from './ToggleReducers';
import {dbReducers} from './DBReducers';
import { POSTReducers } from './POSTReducers';
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    toggle: toggleReducers,
    searchData: dbReducers,
    post: POSTReducers
})