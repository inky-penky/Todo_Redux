import {generateId} from '../utils'

const defaultTodos = [{task: 'Buy some milk', id: generateId(), done: false}, {task: 'Eat some beans', id: generateId(), done: false }]

const reducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
        },
      ];
      break;
    case "STRIKE_TODO":
      return state.forEach((task) => task.id !== action.payload.id);
      break;
    case "REMOVE_TODO":
      return state.filter((task) => task.id !== action.payload.id);
      break;
    default:
      return state;
      break;
  }
}


export default reducer;