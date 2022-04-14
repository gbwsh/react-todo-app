import React from "react";

const Todo = ({ todo, handleCompleted, handleRemove }) => {
  // const handleCompleted = (e) => {
  //   todo.completed = !todo.completed;
  //   return todo;
  // };

  // const completed = () => handleCompleted(todo.id);
  const remove = () => handleRemove(todo.id);

  return (
    <div>
      <input type="checkbox" onChange={remove} />
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
