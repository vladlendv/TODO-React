import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineRestore } from "react-icons/md";

const DeletedItem = ({ todo, removeDeletedTodo, restoreTodo }) => {
  return (
    <div className="flex pb-2">
      <button onClick={() => restoreTodo(todo)}>
        <MdOutlineRestore
          title="Click for restore this todo"
          size={24}
          className="text-green-400 hover:text-green-500"
        />
      </button>
      <div className={`opacity-50 ${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</div>
      <button onClick={() => removeDeletedTodo(todo.id)}>
        <AiOutlineDelete size={24} className="text-slate-600 hover:text-red-500" />
      </button>
    </div>
  );
};

export default DeletedItem;
