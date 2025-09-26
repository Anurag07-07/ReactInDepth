import React from 'react'

const name = "Anurag"
const date = new Date()
const Greeting = () => {
  return (
    <div>
      <h1>Hello Good Evening {name} </h1>
      <p>Today Date is {date.toLocaleDateString()}</p>      
    </div>
  )
}

export default Greeting
