import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './App.scss';
import NoTodo from "./component/NoTodo";
import { addTodo, removeTodo } from "./store/actions";
import {generateId} from "./utils"



function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state)=> state)
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    
    if (!newTodo.trim()) return;

    const todoId = generateId();
    dispatch(addTodo(newTodo, todoId));
    setNewTodo("");
  };



  return (
    <div className="App">
      <header>Todo</header>
      <NoTodo />
      {
         todos.map(todo => (
          <div className="todo">
            <p>{todo.task}</p>
            <img src="./images/bin.svg" alt="delete" onClick={()=> dispatch(removeTodo(todo.id))} />
          </div>
          ))
      }
      
      <form className="formInput" onSubmit={handleAddTodo} >
        <span>Add a new todo:</span>
        <input value={newTodo} onInput={(e) => setNewTodo(e.target.value)} className="todoInput" type="text" placeholder="Enter task and press enter"></input>
        <span className="border"></span>
      </form>
    </div>
  );
}

export default App;
