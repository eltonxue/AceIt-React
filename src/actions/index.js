const VALIDATE_REGISTRATION_REQUESTED = 'VALIDATE_REGISTRATION_REQUESTED';
const VALIDATE_LOGIN_REQUESTED = 'VALIDATE_LOGIN_REQUESTED';
const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';

export { VALIDATE_REGISTRATION_REQUESTED, VALIDATE_LOGIN_REQUESTED, LOGOUT_REQUESTED };

// Actions
function validateRegistration(username, email, password, confirmPassword) {
  return { type: VALIDATE_REGISTRATION_REQUESTED, payload: { username, email, password, confirmPassword } };
}

function validateLogin(username, password) {
  return { type: VALIDATE_LOGIN_REQUESTED, payload: { username, password } };
}

function logout() {
  return { type: LOGOUT_REQUESTED, payload: {} };
}

export { validateRegistration, validateLogin, logout };
