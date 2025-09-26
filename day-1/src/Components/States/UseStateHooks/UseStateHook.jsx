import React, { useState } from 'react'

const UseStateHook = () => {
  const [count,setCount] = useState(0)

  //Functional Way to write Changes
  function Increment() {
    setCount(count+1)
  }
  function Decrement() {
    setCount(count-1)
  }
  

  return (
    <section>
      <div>Count{count}</div>
      <div onClick={()=>setCount(count+1)}>Increment</div>
      <div onClick={()=>setCount(count-1)}>Decrement</div>
    </section>
  )
}

export default UseStateHook
