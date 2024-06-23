import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/todos").then((res) => {
      setTodos(res.data.all_todo);
    });
  }, []);

  return (
    <>
      <h1>Todos : {todos.length}</h1>
      {todos.map((todo) => {
        return (
          <>
            <h4>Title : {todo.title}</h4>
            <h6>Description : {todo.description}</h6>
          </>
        );
      })}
    </>
  );
}

export default App;
