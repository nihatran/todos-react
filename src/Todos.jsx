import { useState } from "react";

export default function Todos({
  todos,
  toggleTodo,
  handleEditTodo,
  handleDeleteTodo,
}) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" onChange={() => toggleTodo(todo.id)}></input>
            {todo.text}
            <button onClick={() => handleEditTodo(todo.id, "show input")}>
              Edit
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
