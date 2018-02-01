import {
  VALIDATE_REGISTRATION_SUCCEEDED,
  VALIDATE_REGISTRATION_FAILED,
  VALIDATE_LOGIN_SUCCEEDED,
  VALIDATE_LOGIN_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED
} from '../sagas/AuthenticationSagas';

export default function(state = {}, action) {
  // console.log('Validate Registration Request received', action);

  switch (action.type) {
    case VALIDATE_REGISTRATION_SUCCEEDED:
      console.log('Validate Registration Succeeded received', action.payload);
      // console.log(action.payload);
      return { ...state, action };
    case VALIDATE_REGISTRATION_FAILED:
      console.log('Registration Failed');
      return state;
    case VALIDATE_LOGIN_SUCCEEDED:
      console.log('Validate Login Succeeded received', action.payload);
      return { ...state, action };
    case VALIDATE_LOGIN_FAILED:
      console.log('Login Failed');
      return state;
    case LOGOUT_SUCCEEDED:
      console.log('Logout Succeeded received', action.payload);
      return { ...state, action };
    case LOGOUT_FAILED:
      return state;
  }

  return state;
}
