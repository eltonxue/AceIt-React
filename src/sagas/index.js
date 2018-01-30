import { VALIDATE_REGISTRATION_REQUESTED, VALIDATE_LOGIN_REQUESTED } from '../actions';
import { validateRegistration, validateLogin } from './AuthenticationSagas';

import { all, takeEvery, takeLatest } from 'redux-saga/effects';

function* rootSaga(dispatch) {
  yield all([
    takeLatest('VALIDATE_REGISTRATION_REQUESTED', validateRegistration),
    takeLatest('VALIDATE_LOGIN_REQUESTED', validateLogin)
  ]);
}

export default rootSaga;
