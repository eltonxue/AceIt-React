import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const VALIDATE_REGISTRATION_SUCCEEDED = 'VALIDATE_REGISTRATION_SUCCEEDED';
const VALIDATE_REGISTRATION_FAILED = 'VALIDATE_REGISTRATION_FAILED';
const VALIDATE_LOGIN_SUCCEEDED = 'VALIDATE_LOGIN_SUCCEEDED';
const VALIDATE_LOGIN_FAILED = 'VALIDATE_LOGIN_FAILED';

export {
  VALIDATE_REGISTRATION_SUCCEEDED,
  VALIDATE_REGISTRATION_FAILED,
  VALIDATE_LOGIN_SUCCEEDED,
  VALIDATE_LOGIN_FAILED
};

const getRegistration = (username, email, password, confirmPassword) => {
  return axios.post('http://localhost:3000/auth/register', { username, email, password, confirmPassword });
};

const getLogin = (username, password) => {
  return axios.post('http://localhost:3000/auth/login', { username, password });
};

function* validateRegistration(action) {
  try {
    const { username, email, password, confirmPassword } = action.payload;
    const response = yield call(getRegistration, username, email, password, confirmPassword);
    yield put({ type: VALIDATE_REGISTRATION_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VALIDATE_REGISTRATION_FAILED, payload: e.message });
  }
}

function* validateLogin(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(getLogin, username, password);
    yield put({ type: VALIDATE_LOGIN_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VALIDATE_LOGIN_FAILED, payload: e.message });
  }
}

export { validateRegistration, validateLogin };
