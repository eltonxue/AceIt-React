const VALIDATE_REGISTRATION_REQUESTED = 'VALIDATE_REGISTRATION_REQUESTED';
const VALIDATE_LOGIN_REQUESTED = 'VALIDATE_LOGIN_REQUESTED';
const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
const VERIFY_TOKEN_REQUESTED = 'VERIFY_TOKEN_REQUESTED';

const FETCH_QUESTION_BANKS_REQUESTED = 'FETCH_QUESTION_BANKS_REQUESTED';
const SEARCH_QUESTION_BANKS_REQUESTED = 'SEARCH_QUESTION_BANKS_REQUESTED';
const ADD_QUESTION_BANK_REQUESTED = 'ADD_QUESTION_BANK_REQUESTED';
const REMOVE_QUESTION_BANK_REQUESTED = 'REMOVE_QUESTION_BANK_REQUESTED';
const UPDATE_TITLE_REQUESTED = 'UPDATE_TITLE_REQUESTED';
const ADD_QUESTION_REQUESTED = 'ADD_QUESTION_REQUESTED';
const REMOVE_QUESTION_REQUESTED = 'REMOVE_QUESTION_REQUESTED';

export {
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
};

// Actions
function validateRegistration(username, email, password, confirmPassword) {
  return { type: VALIDATE_REGISTRATION_REQUESTED, payload: { username, email, password, confirmPassword } };
}

function validateLogin(username, password) {
  return { type: VALIDATE_LOGIN_REQUESTED, payload: { username, password } };
}

function verifyToken(token) {
  return { type: VERIFY_TOKEN_REQUESTED, payload: { token } };
}

function logout() {
  return { type: LOGOUT_REQUESTED, payload: {} };
}

function fetchQuestionBanks() {
  return { type: FETCH_QUESTION_BANKS_REQUESTED, payload: {} };
}

function searchQuestionBanks(input) {
  return { type: SEARCH_QUESTION_BANKS_REQUESTED, payload: { input } };
}

function addQuestionBank(title, questions) {
  return { type: ADD_QUESTION_BANK_REQUESTED, payload: { title, questions } };
}

function removeQuestionBank(bankId) {
  return { type: REMOVE_QUESTION_BANK_REQUESTED, payload: { bankId } };
}

function updateTitle(bankId, newTitle) {
  return { type: UPDATE_TITLE_REQUESTED, payload: { bankId, newTitle } };
}

function addQuestion(bankId, question) {
  return { type: ADD_QUESTION_REQUESTED, payload: { bankId, question } };
}

function removeQuestion(bankId, question) {
  return { type: REMOVE_QUESTION_REQUESTED, payload: { bankId, question } };
}

export {
  validateRegistration,
  validateLogin,
  verifyToken,
  logout,
  fetchQuestionBanks,
  searchQuestionBanks,
  addQuestionBank,
  removeQuestionBank,
  updateTitle,
  addQuestion,
  removeQuestion
};
