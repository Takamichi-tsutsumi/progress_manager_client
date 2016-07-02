import { FETCH_PROGRESSES, CREATE_PROGRESS, UPDATE_PROGRESS }
  from '../actions/index';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case FETCH_PROGRESSES:
      return { ...state, all: action.payload.data };

    default:
      return state;

  }
}