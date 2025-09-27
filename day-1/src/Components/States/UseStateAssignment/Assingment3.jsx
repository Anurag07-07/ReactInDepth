import React, { useState } from 'react'

const Assingment3 = () => {
  const [users,setUser] = useState({
    name:"Anurag",
    age:21
  })
  const [name,setName] = useState("")
  const [age,setAge] = useState(null)

  function submitHandler(e){
    e.preventDefault()
    setUser({name:name,age:Number(age)})
    setName("")
    setAge("")
  }
  return (
    <div>
      <h2>Update Profile</h2>
      <div>
        <h1>{users.name}</h1>
        <h1>{users.age}</h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
        <label>Update the Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}   placeholder='Enter the Name'></input>
        <label>Update the Age</label>
        <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}  placeholder='Enter the Age'></input>
        <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Assingment3
