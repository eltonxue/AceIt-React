import axios from 'axios';
import { call, put } from 'redux-saga/effects';

// Successful actions
const FETCH_QUESTION_BANKS_SUCCEEDED = 'FETCH_QUESTION_BANKS_SUCCEEDED';
const SEARCH_QUESTION_BANKS_SUCCEEDED = 'SEARCH_QUESTION_BANKS_SUCCEEDED';
const ADD_QUESTION_BANK_SUCCEEDED = 'ADD_QUESTION_BANK_SUCCEEDED';
const REMOVE_QUESTION_BANK_SUCCEEDED = 'REMOVE_QUESTION_BANK_SUCCEEDED';
const UPDATE_TITLE_SUCCEEDED = 'UPDATE_TITLE_SUCCEEDED';
const ADD_QUESTION_SUCCEEDED = 'ADD_QUESTION_SUCCEEDED';
const REMOVE_QUESTION_SUCCEEDED = 'REMOVE_QUESTION_SUCCEEDED';

// Failed actions
const FETCH_QUESTION_BANKS_FAILED = 'FETCH_QUESTION_BANKS_FAILED';
const SEARCH_QUESTION_BANKS_FAILED = 'SEARCH_QUESTION_BANKS_FAILED';
const ADD_QUESTION_BANK_FAILED = 'ADD_QUESTION_BANK_FAILED';
const REMOVE_QUESTION_BANK_FAILED = 'REMOVE_QUESTION_BANK_FAILED';
const UPDATE_TITLE_FAILED = 'UPDATE_TITLE_FAILED';
const ADD_QUESTION_FAILED = 'ADD_QUESTION_FAILED';
const REMOVE_QUESTION_FAILED = 'REMOVE_QUESTION_FAILED';

export {
  FETCH_QUESTION_BANKS_SUCCEEDED,
  SEARCH_QUESTION_BANKS_SUCCEEDED,
  ADD_QUESTION_BANK_SUCCEEDED,
  REMOVE_QUESTION_BANK_SUCCEEDED,
  UPDATE_TITLE_SUCCEEDED,
  ADD_QUESTION_SUCCEEDED,
  REMOVE_QUESTION_SUCCEEDED,
  FETCH_QUESTION_BANKS_FAILED,
  SEARCH_QUESTION_BANKS_FAILED,
  ADD_QUESTION_BANK_FAILED,
  REMOVE_QUESTION_BANK_FAILED,
  UPDATE_TITLE_FAILED,
  ADD_QUESTION_FAILED,
  REMOVE_QUESTION_FAILED
};

const getQuestionBanks = () => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get('http://localhost:3000/users/banks');
};

const getQuestionBanksSearched = input => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.get(`http://localhost:3000/users/banks/search/${input}`);
};

const postAddQuestionBank = (title, questions) => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.post('http://localhost:3000/action/bank', { title, questions });
};

const deleteRemoveQuestionBank = bankId => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.delete('http://localhost:3000/action/bank', { params: { bankId } });
};

const patchUpdateTitle = (bankId, newTitle) => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.patch('http://localhost:3000/action/bank/update-title', { bankId, newTitle });
};

const patchAddQuestion = (bankId, question) => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;
  return axios.patch('http://localhost:3000/action/bank/add-question', { bankId, question });
};

const patchRemoveQuestion = (bankId, question) => {
  const token = document.cookie;
  axios.defaults.headers.common['Authorization'] = token;

  return axios.patch('http://localhost:3000/action/bank/remove-question', { bankId, question });
};

function* fetchQuestionBanks() {
  try {
    const response = yield call(getQuestionBanks);
    console.log(response);
    yield put({ type: FETCH_QUESTION_BANKS_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_QUESTION_BANKS_FAILED, payload: e.message });
  }
}

function* searchQuestionBanks(action) {
  try {
    const { input } = action.payload;
    const response = yield call(getQuestionBanksSearched, input);
    yield put({ type: SEARCH_QUESTION_BANKS_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: SEARCH_QUESTION_BANKS_FAILED, payload: e.message });
  }
}

function* addQuestionBank(action) {
  try {
    const { title, questions } = action.payload;
    const response = yield call(postAddQuestionBank, title, questions);
    yield put({ type: ADD_QUESTION_BANK_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: ADD_QUESTION_BANK_FAILED, payload: e.message });
  }
}

function* removeQuestionBank(action) {
  try {
    const { bankId } = action.payload;
    const response = yield call(deleteRemoveQuestionBank, bankId);
    yield put({ type: REMOVE_QUESTION_BANK_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: REMOVE_QUESTION_BANK_FAILED, payload: e.message });
  }
}

function* updateTitle(action) {
  try {
    const { bankId, newTitle } = action.payload;
    const response = yield call(patchUpdateTitle, bankId, newTitle);
    yield put({ type: UPDATE_TITLE_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: UPDATE_TITLE_FAILED, payload: e.message });
  }
}

function* addQuestion(action) {
  try {
    const { bankId, question } = action.payload;
    const response = yield call(patchAddQuestion, bankId, question); // Will produce exception if API call fails
    yield put({ type: ADD_QUESTION_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: ADD_QUESTION_FAILED, payload: e.message });
  }
}

function* removeQuestion(action) {
  try {
    const { bankId, question } = action.payload;
    const response = yield call(patchRemoveQuestion, bankId, question);
    yield put({ type: REMOVE_QUESTION_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: REMOVE_QUESTION_FAILED, payload: e.message });
  }
}

export {
  fetchQuestionBanks,
  searchQuestionBanks,
  addQuestionBank,
  removeQuestionBank,
  updateTitle,
  addQuestion,
  removeQuestion
};
