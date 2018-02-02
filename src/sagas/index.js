import {
  VALIDATE_REGISTRATION_REQUESTED,
  VALIDATE_LOGIN_REQUESTED,
  VERIFY_TOKEN_REQUESTED,
  LOGOUT_REQUESTED,
  FETCH_QUESTION_BANKS_REQUESTED
} from '../actions';
import { validateRegistration, validateLogin, verifyToken, logout } from './AuthenticationSagas';
import { fetchQuestionBanks } from './QuestionBanksSagas';

import { all, takeEvery, takeLatest } from 'redux-saga/effects';

function* rootSaga(dispatch) {
  yield all([
    takeLatest(VALIDATE_REGISTRATION_REQUESTED, validateRegistration),
    takeLatest(VALIDATE_LOGIN_REQUESTED, validateLogin),
    takeLatest(VERIFY_TOKEN_REQUESTED, verifyToken),
    takeLatest(LOGOUT_REQUESTED, logout),
    takeLatest(FETCH_QUESTION_BANKS_REQUESTED, fetchQuestionBanks)
  ]);
}

export default rootSaga;
