import React from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'

const TodoTextarea = ({ todoText, setTodoText, addTodo }) => {
  return (
    <div className="flex">
        <textarea
          placeholder="Add new todo here"
          value={todoText}
          className="border border-gray-300 rounded-md resize-none"
          onChange={(e) => setTodoText(e.target.value)}
          cols="30"
          rows="1"
        ></textarea>
        <button onClick={addTodo} className="hover:text-green-500">
          <IoMdAddCircleOutline size={30} />
        </button>
      </div>
  )
}

export default TodoTextarea