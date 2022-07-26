import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, todoChanged, removeTodo }) => {
  return (
    <div className="mb-8">
        <h2 className="text-3xl text-center">Todo List</h2>
        {todos &&
          todos.map((todo) => (
            <TodoItem
              todoChanged={todoChanged}
              removeTodo={removeTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
      </div>
  )
}

export default TodoList