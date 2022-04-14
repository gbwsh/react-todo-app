import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleCompleted }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} handleCompleted={handleCompleted} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
