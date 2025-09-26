import React, { useEffect, useState } from 'react'

const UseStateWithEffect = () => {
  const [name,setName] = useState(()=>{
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName) : ""
  })

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name])

  function handleChange(event){
    setName(event.target.value)
  }

  function handleClear(){
    setName('')
  }

  return (
    <div>
      <div>Your Name: {name}</div>
      <input type='text' onChange={handleChange} placeholder='Enter tHe name'></input>
      <div onClick={handleClear}>ClearName</div>
    </div>
  )
}

export default UseStateWithEffect
