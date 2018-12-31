import {toggleReducers} from './ToggleReducers';
import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    toggle: toggleReducers
})