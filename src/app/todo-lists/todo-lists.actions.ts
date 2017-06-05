import { TodoList } from '../todo-list/todo-list';

export const ActionTypes = {
  SET: 'set_todo_lists'
};

export const setTodoLists = (todoLists: TodoList[]) => {
  return {
    type: ActionTypes.SET,
    payload: todoLists
  };
};
