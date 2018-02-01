import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const VALIDATE_REGISTRATION_SUCCEEDED = 'VALIDATE_REGISTRATION_SUCCEEDED';
const VALIDATE_REGISTRATION_FAILED = 'VALIDATE_REGISTRATION_FAILED';
const VALIDATE_LOGIN_SUCCEEDED = 'VALIDATE_LOGIN_SUCCEEDED';
const VALIDATE_LOGIN_FAILED = 'VALIDATE_LOGIN_FAILED';
const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

export {
  VALIDATE_REGISTRATION_SUCCEEDED,
  VALIDATE_REGISTRATION_FAILED,
  VALIDATE_LOGIN_SUCCEEDED,
  VALIDATE_LOGIN_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
};

const postRegistration = (username, email, password, confirmPassword) => {
  return axios.post('http://localhost:3000/auth/register', { username, email, password, confirmPassword });
};

const postLogin = (username, password) => {
  return axios.post('http://localhost:3000/auth/login', { username, password });
};

const getLogout = () => {
  return axios.get('http://localhost:3000/auth/logout');
};

function* validateRegistration(action) {
  try {
    const { username, email, password, confirmPassword } = action.payload;
    const response = yield call(postRegistration, username, email, password, confirmPassword);
    yield put({ type: VALIDATE_REGISTRATION_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VALIDATE_REGISTRATION_FAILED, payload: e.message });
  }
}

function* validateLogin(action) {
  try {
    const { username, password } = action.payload;
    const response = yield call(postLogin, username, password);
    yield put({ type: VALIDATE_LOGIN_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VALIDATE_LOGIN_FAILED, payload: e.message });
  }
}

function* logout(action) {
  try {
    const response = yield call(getLogout);
    yield put({ type: LOGOUT_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: LOGOUT_FAILED, payload: e.message });
  }
}

export { validateRegistration, validateLogin, logout };
