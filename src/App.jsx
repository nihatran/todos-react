import { useState } from "react";
import Todos from "./Todos";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputTodo(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        text: newTodo,
        completed: false,
      },
    ]);

    setNewTodo("");
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleEditTodo(id, newText) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1>To Do List</h1>
      <input type="text" onChange={handleInputTodo} value={newTodo}></input>
      <button onClick={handleAddTodo}>Add</button>
      <Todos
        todos={todos}
        toggleTodo={toggleTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      ></Todos>
    </>
  );
}

export default App;
