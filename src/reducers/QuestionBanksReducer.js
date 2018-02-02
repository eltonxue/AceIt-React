import { FETCH_QUESTION_BANKS_SUCCEEDED, FETCH_QUESTION_BANKS_FAILED } from '../sagas/QuestionBanksSagas';

export default function(state = {}, action) {
  // console.log('Validate Registration Request received', action);

  switch (action.type) {
    case FETCH_QUESTION_BANKS_SUCCEEDED:
      console.log('Fetch Question Banks Succeeded received', action.payload);
      // console.log(action.payload);
      return { ...state, action };
    case FETCH_QUESTION_BANKS_FAILED:
      console.log('Fetch Question Banks Failed');
      return state;
  }

  return state;
}
