import { useState } from 'react'
import ComponentOne from './ComponentOne'

const ComponentTwo = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <ComponentOne count={count} Changehandler={()=>setCount(count+1)} ></ComponentOne>      
    </div>
  )
}

export default ComponentTwo
