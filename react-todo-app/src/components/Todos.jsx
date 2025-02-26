import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
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
    // console.log(todos)
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((e, i) => i !== index));
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
        <button onClick={getInputData}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          {todo} &nbsp;
          <FontAwesomeIcon onClick={() =>updateTodo(index)} icon={faPenToSquare} /> &nbsp;
          <FontAwesomeIcon
            onClick={() => deleteTodo(index)}
            icon={faTrash}/>
        </div>
      ))}
    </div>
  );
};

export default Todos;
