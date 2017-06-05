export const ActionTypes = {
  SELECT: 'select_todo_list'
};

export const selectTodoList = (id) => {
  return {
    type: ActionTypes.SELECT,
    payload: id
  };
};
