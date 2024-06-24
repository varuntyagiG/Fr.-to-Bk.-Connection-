import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos").then((res) => {
      setTodos(res.data.all_todo);
    });
  }, []);

  return (
    <>
      < CreateTodo />
      <h1>Todos : {todos.length}</h1>
      {todos.map((todo) => {
        return (
          <>
            <h4>Title : {todo.title}</h4>
            <h6>Description : {todo.description}</h6>
            <button>{todo.completed === true ? "completed" : "marks as completed"}</button>
          </>
        );
      })}
    </>
  );
}

export default App;
