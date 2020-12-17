export const addTodo = (task, id) => ({
  type: "ADD_TODO",
  payload: {
    id,
    task,
  },
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: {
    id,
  },
});