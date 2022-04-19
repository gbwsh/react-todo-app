import React /*, { useState }*/ from "react";
// import { v4 as uuidv } from "uuid";

const TodoForm = ({ todo, handleChange, handleSubmit }) => {
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
