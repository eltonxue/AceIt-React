import {
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
} from '../sagas/QuestionBanksSagas';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTION_BANKS_SUCCEEDED:
      console.log('Fetch Question Banks Succeeded received', action.payload);
      action.payload.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      return { ...state, data: action.payload };
    case FETCH_QUESTION_BANKS_FAILED:
      console.log('Fetch Question Banks Failed');
      return state;
    case SEARCH_QUESTION_BANKS_SUCCEEDED:
      console.log('Search Question Banks Succeeded received', action.payload);
      return { ...state, data: action.payload };
    case SEARCH_QUESTION_BANKS_FAILED:
      console.log('Search Question Banks Failed');
      return state;
    case ADD_QUESTION_BANK_SUCCEEDED: {
      console.log('Add Question Bank Succeeded received', action.payload);
      let newState = { ...state };
      newState.data.unshift({ ...action.payload });
      return { ...state, update: action.payload };
    }
    case ADD_QUESTION_BANK_FAILED:
      console.log('Add Question Bank Failed');
      return state;
    case REMOVE_QUESTION_BANK_SUCCEEDED:
      console.log('Remove Question Bank Succeeded received', action.payload);
      let newState = { ...state };
      let newData = newState.data.filter(current => current.id != parseInt(action.payload.id, 10));
      newState.data = newData;
      return { ...newState, update: action.payload };
    case REMOVE_QUESTION_BANK_FAILED:
      console.log('Remove Question Bank Failed');
      return state;
    case UPDATE_TITLE_SUCCEEDED: {
      console.log('Update Title Succeeded received', action.payload);
      // Update store
      let newState = { ...state };
      let questionBanks = newState.data;

      questionBanks.forEach(bank => {
        if (bank.id === action.payload.id) {
          bank.title = action.payload.title;
          bank.updatedAt = action.payload.updatedAt;
        }
      });
      return { ...newState, update: action.payload };
    }

    case UPDATE_TITLE_FAILED:
      console.log('Update Title Failed');
      return state;
    case ADD_QUESTION_SUCCEEDED: {
      console.log('Add Question Succeeded received', action.payload);
      // Update store
      let newState = { ...state };
      let questionBanks = newState.data;

      questionBanks.forEach(bank => {
        if (bank.id === action.payload.id) {
          bank.questions = action.payload.questions;
          bank.updatedAt = action.payload.updatedAt;
        }
      });

      return { ...newState, update: action.payload };
    }

    case ADD_QUESTION_FAILED:
      console.log('Add Question Failed');
      return state;
    case REMOVE_QUESTION_SUCCEEDED: {
      console.log('Remove Question Succeeded received', action.payload);
      // Update store
      let newState = { ...state };
      let questionBanks = newState.data;

      questionBanks.forEach(bank => {
        if (bank.id === action.payload.id) {
          bank.questions = action.payload.questions;
          bank.updatedAt = action.payload.updatedAt;
        }
      });
      return { ...newState, update: action.payload };
    }

    case REMOVE_QUESTION_FAILED:
      console.log('Remove Question Failed');
      return state;
  }

  return state;
}
