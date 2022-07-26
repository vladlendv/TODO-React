import React, { useState } from "react"
import CompletedTodoList from "./components/CompletedTodoList"
import TodoList from "./components/TodoList"
import TodoTextarea from "./components/TodoTextarea"

let data = [
  {
    id: 1,
    title: "Do something wrong",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Boring todo",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Test task",
    isCompleted: false,
  },
  {
    id: 4,
    title: "do it todo",
    isCompleted: false,
  },
]

const App = () => {
  const [todos, setTodos] = useState(data)
  const [todoText, setTodoText] = useState("")
  const [deleted, setDeleted] = useState([])

  const todoChanged = (id) => {
    const copy = [...todos]
    let currentTodo = copy.find((item) => item.id === id)
    currentTodo.isCompleted = !currentTodo.isCompleted
    setTodos(copy)
  }

  const removeElem = (target, id, callback) => {
    callback([...target].filter((item) => item.id !== id))
  }

  const removeTodo = (id) => {
    let deletedItem = todos.filter((item) => item.id === id)
    removeElem(todos, id, setTodos)
    setDeleted([...deletedItem, ...deleted])
  }

  const removeDeletedTodo = (id) => {
    removeElem(deleted, id, setDeleted)
  }

  const restoreTodo = (todo) => {
    setTodos([...todos, todo])
    removeDeletedTodo(todo.id)
  }

  const addTodo = () => {
    if (todoText !== "") {
      setTodos([
        {
          id: Math.random(1, 100),
          title: todoText,
          isCompleted: false,
        },
        ...todos,
      ])
      setTodoText("")
    }
  }

  return (
    <div>
      <TodoTextarea
        todoText={todoText}
        setTodoText={setTodoText}
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        todoChanged={todoChanged}
        removeTodo={removeTodo}
      />
      <CompletedTodoList
        deleted={deleted}
        restoreTodo={restoreTodo}
        removeDeletedTodo={removeDeletedTodo}
      />
    </div>
  )
}

export default App
