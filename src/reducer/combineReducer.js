import {combineReducers} from 'redux';
import userDetailReducer from './reducer.js';

const allReducers = combineReducers({
  userDetail: userDetailReducer,
});

export default allReducers;
