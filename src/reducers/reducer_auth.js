import { LOG_IN } from '../actions/index';

const INITIAL_STATE = {
  isLoggedIn: false, 
  isRequesting: false,
  auth_token: null, 
  errors: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOG_IN:
      return state;
    default:
      return state;
  }
}