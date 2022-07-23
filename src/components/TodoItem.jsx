import React from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";

const TodoItem = ({ todo, todoChanged, removeTodo }) => {
  return (
    <div className="flex pb-2">
      <button onClick={() => todoChanged(todo.id)}>
        <AiOutlineCheck
          size={24}
          className={`${
            todo.isCompleted ? "bg-green-600" : ""
          } text-white border-[3px] border-green-600 rounded-lg`}
        />
      </button>
      <div className={`${todo.isCompleted ? "line-through" : ""}`}>
        {todo.title}
      </div>
      <button onClick={() => removeTodo(todo.id)}>
        <AiOutlineDelete size={24} className="hover:text-red-500" />
      </button>
    </div>
  );
};

export default TodoItem;
