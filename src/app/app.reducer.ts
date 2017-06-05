import { combineReducers } from 'redux';
import TodoListsReducer from './todo-lists/todo-lists.reducer';

export default combineReducers({
  todoLists: TodoListsReducer
});
