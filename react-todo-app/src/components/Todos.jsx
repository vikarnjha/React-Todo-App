import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const getInput = (e) => {
    setInput(e.target.value);
    // console.log("Inputed text :- ", setInput)
  };
  const getInputData = () => {
    // console.log(input)
    let store = [...todos, input];
    setTodos(store);
    // setTodos(...todos, input)
    setInput("");
    // console.log(todos)
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
          <FontAwesomeIcon
            onClick={() => setTodos(todos.filter((e, i) => i !== index))}
            className="trash"
            icon={faTrash}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
