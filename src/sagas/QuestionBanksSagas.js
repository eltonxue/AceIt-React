import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const FETCH_QUESTION_BANKS_SUCCEEDED = 'FETCH_QUESTION_BANKS_SUCCEEDED';
const FETCH_QUESTION_BANKS_FAILED = 'FETCH_QUESTION_BANKS_FAILED';

export { FETCH_QUESTION_BANKS_SUCCEEDED, FETCH_QUESTION_BANKS_FAILED };

const getQuestionBanks = () => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get('http://localhost:3000/users/banks');
};

function* fetchQuestionBanks() {
  try {
    const response = yield call(getQuestionBanks);
    yield put({ type: FETCH_QUESTION_BANKS_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_QUESTION_BANKS_FAILED, payload: e.message });
  }
}

export { fetchQuestionBanks };
