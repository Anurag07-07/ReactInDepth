import React, { useState } from 'react'

const UseStateObject = () => {
  const [movie,setMovie] = useState({
    name:"Fast and Furious 9",
    rating:9
  })

  function UpdateRating(){
    setMovie({...movie,rating:movie.rating+1})
  }
  
  return (
    <div>
      <div>
        <div>Movie Name:{movie.name}</div>
        <div>Movie Rating:{movie.rating}</div>
        <div onClick={UpdateRating}>Update Rating</div>
      </div>
    </div>
  )
}

export default UseStateObject
