import { combineReducers } from 'redux';
import ProgressesReducer from './reducer_progresses'

const rootReducer = combineReducers({
  progresses: ProgressesReducer
});

export default rootReducer;