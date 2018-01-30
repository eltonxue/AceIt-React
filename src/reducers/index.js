import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthenticationReducer from './authentication_reducer';

export default combineReducers({
  routing: routerReducer,
  authentication: AuthenticationReducer
});
