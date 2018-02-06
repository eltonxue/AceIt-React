import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Successful actions
const VALIDATE_REGISTRATION_SUCCEEDED = 'VALIDATE_REGISTRATION_SUCCEEDED';
const VALIDATE_LOGIN_SUCCEEDED = 'VALIDATE_LOGIN_SUCCEEDED';
const VERIFY_TOKEN_SUCCEEDED = 'VERIFY_TOKEN_SUCCEEDED';
const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';

// Failed actions
const VALIDATE_REGISTRATION_FAILED = 'VALIDATE_REGISTRATION_FAILED';
const VALIDATE_LOGIN_FAILED = 'VALIDATE_LOGIN_FAILED';
const VERIFY_TOKEN_FAILED = 'VERIFY_TOKEN_FAILED';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

export {
  VALIDATE_REGISTRATION_SUCCEEDED,
  VALIDATE_LOGIN_SUCCEEDED,
  VERIFY_TOKEN_SUCCEEDED,
  LOGOUT_SUCCEEDED,
  VALIDATE_REGISTRATION_FAILED,
  VALIDATE_LOGIN_FAILED,
  VERIFY_TOKEN_FAILED,
  LOGOUT_FAILED
};

const postRegistration = (username, email, password, confirmPassword) => {
  return axios.post('http://localhost:3000/auth/register', { username, email, password, confirmPassword });
};

const postLogin = (username, password) => {
  return axios.post('http://localhost:3000/auth/login', { username, password });
};

const getVerification = () => {
  // Send token in AXIOS get through headers
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get('http://localhost:3000/verify');
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
    // Set cookie to equal token
    if (response.data.token) {
      document.cookie = response.data.token;
    }
    yield put({ type: VALIDATE_LOGIN_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VALIDATE_LOGIN_FAILED, payload: e.message });
  }
}

function* verifyToken(action) {
  try {
    const token = document.cookie;
    const response = yield call(getVerification);

    if (!response.data.token) {
      // Clear cookie
      document.cookie = '';
    }

    yield put({ type: VERIFY_TOKEN_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: VERIFY_TOKEN_FAILED, payload: e.message });
  }
}

function* logout(action) {
  try {
    const response = yield call(getLogout);
    document.cookie = '';
    yield put({ type: LOGOUT_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: LOGOUT_FAILED, payload: e.message });
  }
}

export { validateRegistration, validateLogin, verifyToken, logout };
