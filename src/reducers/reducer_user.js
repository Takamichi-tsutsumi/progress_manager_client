import { SIGN_UP, LOG_IN, LOG_OUT } from '../actions/index';

const INITIAL_STATE = { user: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_UP:
      return { ...state, logged_in: true,
        user: action.payload.data.user };

    case LOG_IN:
      return { ...state, logged_in: true,
        user: action.payload.data.user };

    case LOG_OUT:
      return { ...state, logged_in: false,
        user: "" };

    default:
      return state;
    
  }
}
