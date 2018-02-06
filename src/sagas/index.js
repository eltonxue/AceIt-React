import {
  VALIDATE_REGISTRATION_REQUESTED,
  VALIDATE_LOGIN_REQUESTED,
  VERIFY_TOKEN_REQUESTED,
  LOGOUT_REQUESTED,
  FETCH_QUESTION_BANKS_REQUESTED,
  SEARCH_QUESTION_BANKS_REQUESTED,
  ADD_QUESTION_BANK_REQUESTED,
  REMOVE_QUESTION_BANK_REQUESTED,
  UPDATE_TITLE_REQUESTED,
  ADD_QUESTION_REQUESTED,
  REMOVE_QUESTION_REQUESTED
} from '../actions';
import { validateRegistration, validateLogin, verifyToken, logout } from './AuthenticationSagas';
import {
  fetchQuestionBanks,
  searchQuestionBanks,
  addQuestionBank,
  removeQuestionBank,
  updateTitle,
  addQuestion,
  removeQuestion
} from './QuestionBanksSagas';

import { all, takeEvery, takeLatest } from 'redux-saga/effects';

function* rootSaga(dispatch) {
  yield all([
    takeLatest(VALIDATE_REGISTRATION_REQUESTED, validateRegistration),
    takeLatest(VALIDATE_LOGIN_REQUESTED, validateLogin),
    takeLatest(VERIFY_TOKEN_REQUESTED, verifyToken),
    takeLatest(LOGOUT_REQUESTED, logout),
    takeLatest(FETCH_QUESTION_BANKS_REQUESTED, fetchQuestionBanks),
    takeLatest(SEARCH_QUESTION_BANKS_REQUESTED, searchQuestionBanks),
    takeLatest(ADD_QUESTION_BANK_REQUESTED, addQuestionBank),
    takeLatest(REMOVE_QUESTION_BANK_REQUESTED, removeQuestionBank),
    takeLatest(UPDATE_TITLE_REQUESTED, updateTitle),
    takeLatest(ADD_QUESTION_REQUESTED, addQuestion),
    takeLatest(REMOVE_QUESTION_REQUESTED, removeQuestion)
  ]);
}

export default rootSaga;
