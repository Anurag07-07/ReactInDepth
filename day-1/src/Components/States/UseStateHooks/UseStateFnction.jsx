import React, { useState } from 'react'

const UseStateFnction = () => {
  const [value,setValue] = useState(()=>{
    const intitalCount = Math.floor(Math.random()*1000)
    return intitalCount
  })

  function Decrement() {
    setValue((prev)=>prev-1)
  }

  return (
    <div>
      <div>Count:{value}</div>
      <div onClick={Decrement}>Decrement</div>
    </div>
  )
}

export default UseStateFnction
