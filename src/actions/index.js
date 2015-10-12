export const ADD_TODO = 'ADD_TODO';

export function addTodo (text, completed) {
  return { type: ADD_TODO, text, completed };
}
