import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv } from "uuid";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { task: "test1", completed: false, id: "1" },
//     { task: "test2", completed: false, id: "2" },
//     { task: "test3", completed: false, id: "3" },
//   ]);

//   const handleCompleted = (id) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id !== id) return todo;
//         return { ...todo, completed: !todo.completed };
//       })
//     );
//   };

//   function addTodo(todo) {
//     setTodos([...todos, todo]);
//   }
//   return (
//     <div>
//       <header>
//         <h1>Todo</h1>
//       </header>
//       <TodoList todos={todos} handleCompleted={handleCompleted} />
//       <TodoForm addTodo={addTodo} />
//     </div>
//   );
// };

// export default App;

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

const App = () => {
  const [todo, setTodo] = useState({
    task: "",
    completed: false,
    id: uuidv(),
  });

  const [todos, setTodos] = useState([
    { task: "test1", completed: false, id: "1" },
    { task: "test2", completed: false, id: "2" },
    { task: "test3", completed: false, id: "3" },
  ]);

  const handleChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo(todo);
      console.log(todo);
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
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <header>
        <h1>Todo</h1>
      </header>
      <TodoList todos={todos} handleCompleted={handleCompleted} />
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
