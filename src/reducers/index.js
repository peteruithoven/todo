import * as actions from '../actions/index.js';

const initialState = [];

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return state = [...state, {
        text: action.text,
        completed: action.completed
      }];
      break;
    default:
      return state;
      break;
  }
}
