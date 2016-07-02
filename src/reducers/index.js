import { combineReducers } from 'redux';
import ProgressesReducer from './reducer_progresses.js';
import AuthReducer from './reducer_auth.js';
import UserReducer from './reducer_user.js';

const rootReducer = combineReducers({
  progresses: ProgressesReducer,
  auth: AuthReducer,
  user: UserReducer
});

export default rootReducer;