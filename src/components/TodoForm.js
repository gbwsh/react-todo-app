import React /*, { useState }*/ from "react";
// import { v4 as uuidv } from "uuid";

const TodoForm = ({ todo, handleChange, handleSubmit }) => {
  // const [todo, setTodo] = useState({
  //   task: "",
  //   completed: false,
  //   id: uuidv(),
  // });

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (todo.task.trim()) {
  //     addTodo(todo);
  //     console.log(todo);
  //     setTodo({ task: "", completed: false, id: uuidv() });
  //   }
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={todo.task} />
        <button>{">"}</button>
      </form>
    </div>
  );
};

export default TodoForm;
