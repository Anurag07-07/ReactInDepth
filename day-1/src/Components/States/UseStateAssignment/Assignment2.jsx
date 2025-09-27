import React, { useState } from 'react'

const Assignment2 = () => {
  const [todos,setTodos] = useState([])
  const [inputValue,setInputValue] = useState("")

  function submitHandler(e){
    e.preventDefault()
    if(inputValue.trim()){
      setTodos([...todos,inputValue])
      setInputValue('') 
    }
  }

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' onChange={handleChange}  value={inputValue} placeholder='Enter The Todo'></input>
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {
          todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Assignment2
