import React from 'react'

const ComponentOne = ({Changehandler,count}) => {
  
  return (
    <div>
      <div>Count:{count}</div>
      <div onClick={Changehandler}>Increment</div>
    </div>
  )
}

export default ComponentOne
