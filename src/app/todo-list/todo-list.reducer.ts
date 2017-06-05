import * as actions from './todo-list.actions';

export interface State {
  selectedTodoList: number;
}

export const initialState: State = {
  selectedTodoList: undefined
};

export default (state: State = initialState, action) => {
  switch (action.type) {
    case actions.ActionTypes.SELECT: {
      return { selectedTodoList: action.payload };
    }
    default:
      return state;
  }
};
