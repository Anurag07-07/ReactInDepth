import React from 'react'
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];
 
const UserList = () => {
  return (
    <div>
      {
        users.map((i)=>{
          return <div key={i.id}>
            <h1>{i.name}</h1>
            <h1>{i.age}</h1>
          </div>
        })
      }      
    </div>
  )
}

export default UserList
