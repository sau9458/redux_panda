import {combineReducers} from 'redux';
import userDetailReducer from './reducer';
import signalmentDetailReducer from './signalmentreducer';

const allReducers = combineReducers({
  userDetail: userDetailReducer,
  signalmentDetail:signalmentDetailReducer
});

export default allReducers;
