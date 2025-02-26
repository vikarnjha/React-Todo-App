import React, { useState } from 'react'

const Todos = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const getInput = (e) => {
    setInput(e.target.value)
    // console.log("Inputed text :- ", setInput)
  }
  const getInputData = () => {
    // console.log(input)
    let store = [...todos, input]
    setTodos(store)
    // setTodos(...todos, input)
    setInput('')
    // console.log(todos)
  }
  return (
    <div className='container'>
        <div className='inputTask'>
          <input type='text' placeholder='Add todo...' onChange={getInput} />
          <button onClick={getInputData}>Add</button>
        </div>
        {todos}
    </div>
  )
}

export default Todos