import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
// Below is the react tostify import
import { ToastContainer, toast } from "react-toastify";
// import "tailwindcss";

function Todos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const deleteAllItems = () => toast("Deleted all todos!");
  const addATodo = () => toast("Todo added!");
  const deleteATodo = () => toast("Todo deleted!");
  const getInput = (e) => {
    setInput(e.target.value);
    // console.log("Inputed text :- ", setInput)
  };
  const getInputData = () => {
    // console.log(input)
    if (input.trim() === "") {
      return;
    }
    let store = [...todos, input];
    setTodos(store);
    // setTodos(...todos, input)
    setInput("");
    addATodo();
    // console.log(todos)
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((e, i) => i !== index));
    deleteATodo();
  };
  const deleteAll = () => {
    if (todos.length === 0) {
      return;
    }
    setTodos([]);
    deleteAllItems();
  };
  const updateTodo = (index) => {
    let updatedTodo = prompt("Update the Todo", todos[index]);
    if (updatedTodo !== null && updatedTodo.trim() !== "") {
      setTodos(
        todos.map((todo, i) => {
          if (i === index) {
            return updatedTodo;
          }
          return todo;
        })
      );
    }
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">List Your Todos</h1>
      <div className="inputTask">
        <input
          type="text"
          placeholder="Add todo..."
          value={input}
          onChange={getInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getInputData();
            }
          }}
        />
        <button onClick={() => {
          getInputData();
        }}>Add</button>
        <span
          onClick={() => {
            deleteAll();
          }}
          className="deleteAll"
        >
          Delete All &nbsp;
          <FontAwesomeIcon icon={faEraser} />
        </span>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          {todo}
          <div className="todo-icons">
            <FontAwesomeIcon
              onClick={() => updateTodo(index)}
              icon={faPenToSquare}
            />
            <FontAwesomeIcon onClick={() => deleteTodo(index)} icon={faTrash} />
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default Todos;
