import { combineReducers } from 'redux';
import TodoListsReducer from './todo-lists/todo-lists.reducer';
import TodoListReducer from './todo-list/todo-list.reducer';

export default combineReducers({
  todoLists: TodoListsReducer,
  todoList: TodoListReducer
});
