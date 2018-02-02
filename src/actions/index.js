const VALIDATE_REGISTRATION_REQUESTED = 'VALIDATE_REGISTRATION_REQUESTED';
const VALIDATE_LOGIN_REQUESTED = 'VALIDATE_LOGIN_REQUESTED';
const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
const VERIFY_TOKEN_REQUESTED = 'VERIFY_TOKEN_REQUESTED';

const FETCH_QUESTION_BANKS_REQUESTED = 'FETCH_QUESTION_BANKS_REQUESTED';

export {
  VALIDATE_REGISTRATION_REQUESTED,
  VALIDATE_LOGIN_REQUESTED,
  VERIFY_TOKEN_REQUESTED,
  LOGOUT_REQUESTED,
  FETCH_QUESTION_BANKS_REQUESTED
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

export { validateRegistration, validateLogin, verifyToken, logout, fetchQuestionBanks };
