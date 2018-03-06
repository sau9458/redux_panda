import {createStore} from 'redux';
import allReducers from '../reducer/combineReducer'
export const store = createStore(allReducers);
