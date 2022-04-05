import { combineReducers } from 'redux';
import TaskReducer from './userReducer'; //add this line

const rootReducer = combineReducers({
  task:TaskReducer  //add taskreducer and name is task for future use.
  });
export default rootReducer;