import { TodoItem } from '../todo-item/todo-item';

export interface TodoList {
  id: number;
  name: string;
  items: TodoItem[];
}
