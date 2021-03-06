import {
  VALIDATE_REGISTRATION_SUCCEEDED,
  VALIDATE_LOGIN_SUCCEEDED,
  VERIFY_TOKEN_SUCCEEDED,
  LOGOUT_SUCCEEDED,
  VALIDATE_REGISTRATION_FAILED,
  VALIDATE_LOGIN_FAILED,
  VERIFY_TOKEN_FAILED,
  LOGOUT_FAILED
} from '../sagas/AuthenticationSagas';

export default function(state = {}, action) {
  // console.log('Validate Registration Request received', action);

  switch (action.type) {
    case VALIDATE_REGISTRATION_SUCCEEDED:
      console.log('Validate Registration Succeeded received', action.payload);
      // console.log(action.payload);
      return { ...state, data: action.payload };
    case VALIDATE_REGISTRATION_FAILED:
      console.log('Registration Failed');
      return state;
    case VALIDATE_LOGIN_SUCCEEDED:
      console.log('Validate Login Succeeded received', action.payload);
      return { ...state, data: action.payload };
    case VALIDATE_LOGIN_FAILED:
      console.log('Login Failed');
      return state;
    case VERIFY_TOKEN_SUCCEEDED:
      console.log('Verify Token Succeeded received', action.payload);
      return { ...state, data: action.payload };
    case VERIFY_TOKEN_FAILED:
      console.log('Verification Failed');
      return state;
    case LOGOUT_SUCCEEDED:
      console.log('Logout Succeeded received', action.payload);
      return { ...state, data: action.payload };
    case LOGOUT_FAILED:
      return state;
  }

  return state;
}
