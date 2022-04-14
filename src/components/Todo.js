import React from "react";

const Todo = ({ todo, handleCompleted }) => {
  // const handleCompleted = (e) => {
  //   todo.completed = !todo.completed;
  //   return todo;
  // };

  const completed = () => handleCompleted(todo.id);

  return (
    <div>
      <input type="checkbox" onChange={completed} />
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
