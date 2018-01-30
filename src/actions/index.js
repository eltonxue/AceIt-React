const VALIDATE_REGISTRATION_REQUESTED = 'VALIDATE_REGISTRATION_REQUESTED';
const VALIDATE_LOGIN_REQUESTED = 'VALIDATE_LOGIN_REQUESTED';

export { VALIDATE_REGISTRATION_REQUESTED, VALIDATE_LOGIN_REQUESTED };

// Actions
function validateRegistration(username, email, password, confirmPassword) {
  return { type: VALIDATE_REGISTRATION_REQUESTED, payload: { username, email, password, confirmPassword } };
}

function validateLogin(username, password) {
  return { type: VALIDATE_LOGIN_REQUESTED, payload: { username, password } };
}

export { validateRegistration, validateLogin };
