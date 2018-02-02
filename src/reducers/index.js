import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import AuthenticationReducer from './AuthenticationReducer';
import QuestionBanksReducer from './QuestionBanksReducer';

export default combineReducers({
  routing: routerReducer,
  authentication: AuthenticationReducer,
  questionBanks: QuestionBanksReducer
});
