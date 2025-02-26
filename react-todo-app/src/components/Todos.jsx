import React from 'react'

const Todos = () => {
  return (
    <div className='container'>
        <div className='inputTask'>
          <input type='text' placeholder='Add todo...' />
          <button>Add</button>
        </div>
    </div>
  )
}

export default Todos