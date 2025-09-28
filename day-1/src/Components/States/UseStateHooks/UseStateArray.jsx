// import React, { useState } from 'react'

// const UseStateArray = () => {
//   const [friends,setFriends] = useState(["Anurag","Chitranshi"])
  
//   //Add New Friend
//   function addNewFriend(){
//     setFriends([...friends,"Khushi"])
//   }

//   function removeNewFriend(){
//     const remove = friends.filter((v)=>v!='Khushi') //If That specific friend is not equal to Khushi than only we have to send element in Remove Variable
//     setFriends(remove)
//   }

//   function UpdateOneFriend(){
//     const Update = friends.map((f)=>f==='Khushi' ? 'Manoj' : f)
//     setFriends(Update)
//   }

//   return (
//     <div>
//       <div>
//         {
//           friends.map((f,index)=>(
//             <div key={index}>{f}</div>
//           ))
//         }
//       </div>
//       <div onClick={addNewFriend}>Add New Friend</div>
//       <div onClick={removeNewFriend}>Remove Friend</div>
//       <div onClick={UpdateOneFriend}>Update Friend</div>
//     </div>
//   )
// }

// export default UseStateArray


import React, { useState } from 'react'

const UseStateArray = () => {
  const [friends,setFriends] = useState(["Anurag","Chitranshi"])

  function AddFriend(){
    setFriends([...friends,"Khushi"])
  }

  function RemoveFriend(){
    const remove = friends.filter((f)=>f!='Khushi')
    setFriends(remove)
  }

  function UpdateFriend(){
    const update = friends.map((f)=>f==='Khushi' ? "Manoj":f)
    setFriends(update)
  }



  return (
    <div>
    <div>
      {
        friends.map((f,index)=>(
          <div key={index}>{f}</div>
        ))
      }
    </div>
    <button onClick={AddFriend}>Add Friend</button>
    <button onClick={RemoveFriend}>Remove Friend</button>
    <button onClick={UpdateFriend}>Update Friend</button>
    </div>
  )
}

export default UseStateArray
