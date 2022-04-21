import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleCompleted, handleRemove }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
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
