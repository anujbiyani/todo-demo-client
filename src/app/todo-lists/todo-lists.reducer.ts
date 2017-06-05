import * as actions from './todo-lists.actions';
import { TodoList } from '../todo-list/todo-list';

export interface State extends Array<TodoList> { }

export const initialState: State = [];

export default (state: State = initialState, action) => {
  switch (action.type) {
    case actions.ActionTypes.SET: {
      return action.payload;
    }
    default:
      return state;
  }
};

export function getSelectedTodoList(state: State, id: number) {
  return state.filter(todoList => todoList.id === id)[0];
}
