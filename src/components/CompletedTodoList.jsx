import React from "react"
import DeletedItem from "./DeletedItem"

const CompletedTodoList = ({ deleted, restoreTodo, removeDeletedTodo }) => {
  return (
    <div className="">
      <h2>Completed Todo List</h2>
      {deleted &&
        deleted.map((todo) => (
          <DeletedItem
            key={todo.id}
            restoreTodo={restoreTodo}
            removeDeletedTodo={removeDeletedTodo}
            todo={todo}
          />
        ))}
    </div>
  )
}

export default CompletedTodoList
