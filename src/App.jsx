import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import DeletedItem from "./components/DeletedItem";
import TodoItem from "./components/TodoItem";

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
];

const App = () => {
  const [todos, setTodos] = useState(data);
  const [todoText, setTodoText] = useState("");
  const [deleted, setDeleted] = useState([]);

  const todoChanged = (id) => {
    const copy = [...todos];
    let currentTodo = copy.find((item) => item.id === id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
    setTodos(copy);
  };

  const removeElem = (target, id, callback) => {
    callback([...target].filter((item) => item.id !== id));
  };

  const removeTodo = (id) => {
    let deletedItem = todos.filter((item) => item.id === id);
    removeElem(todos, id, setTodos);
    setDeleted([...deleted, ...deletedItem]);
  };

  const removeDeletedTodo = (id) => {
    removeElem(deleted, id, setDeleted);
  };

  const restoreTodo = (todo) => {
    setTodos([...todos, todo]);
    removeDeletedTodo(todo.id);
  };

  const addTodo = () => {
    if (todoText !== "") {
      setTodos([
        {
          id: Math.random(1, 100),
          title: todoText,
          isCompleted: false,
        },
        ...todos,
      ]);
      setTodoText("");
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default App;
