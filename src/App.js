import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv } from "uuid";

const App = () => {
  const [queue, setQueue] = useState([]);
  const [todo, setTodo] = useState({
    task: "",
    completed: false,
    id: uuidv(),
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else return [];
  });

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo(todo);
      setTodo({ task: "", completed: false, id: uuidv() });
    }
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, completed: !todo.completed };
      })
    );
    handleRemove(id);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <header>
        <h1>Todo</h1>
      </header>
      <TodoList
        todos={todos}
        handleCompleted={handleCompleted}
        handleRemove={handleRemove}
      />
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <button onClick={(e) => localStorage.clear()}>Clear localStorage</button>
      {/* <button
        onClick={(e) => localStorage.setItem("todos", JSON.stringify(todos))}
      >
        Save localStorage
      </button> */}
      <button onClick={(e) => console.log(todos)}>Log todos</button>
      <button onClick={(e) => console.log(localStorage)}>
        Log localStorage
      </button>
    </div>
  );
};

export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
