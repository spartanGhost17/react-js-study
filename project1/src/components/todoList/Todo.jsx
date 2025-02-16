import { useEffect, useId, useState } from "react";
import React from "react";
import "./style.css";

const Todo = () => {
  const id = useId();
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodos((todos) => {
      return [...todos, { text: input, id: Math.floor(Math.random() * 100) }];
    });

    setInput("");
  };

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>

            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Todo;
