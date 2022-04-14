import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleCompleted, handleRemove }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            handleCompleted={handleCompleted}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
