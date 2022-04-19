import React from "react";

const Todo = ({ todo, handleCompleted, handleRemove }) => {
  // const completed = () => handleCompleted(todo.id);
  const remove = () => handleRemove(todo.id);

  return (
    <div>
      <input type="checkbox" onChange={remove} checked={todo.completed} />
      <p>{todo.task}</p>
    </div>
  );
};

export default Todo;
