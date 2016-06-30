import axios from 'axios';

export const FETCH_PROGRESSES = 'FETCH_PROGRESSES';
export const CREATE_PROGRESS = 'CREATE_PROGRESS';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

export const CREATE_RESOURCE = 'CREATE_RESOURCE';
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

const api_root = 'http://localhost:3000';

export function fetchProgresses() {
  "use strict";
  const request = axios.get(`${api_root}/progresses`);

  return {
    type: FETCH_PROGRESSES,
    payload: request
  }
}
