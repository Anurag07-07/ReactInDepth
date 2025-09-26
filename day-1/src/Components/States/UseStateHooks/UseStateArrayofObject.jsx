import React, { useState } from 'react'

const UseStateArrayofObject = () => {
  const [movies,setMovies] = useState([
    {id:1,title:"Spiderman",rating:3},
    {id:2,title:"Batman",rating:6}
  ])

  function UpdateMovie() {
    const data = movies.map((m)=>m.id === 1 ? {...movies,title:"John Wick 5"}:m)
    setMovies(data)
  }

  return (
    <div>
      <div>
        {
          movies.map(({id,title,rating})=>(
            <div key={id}>
              <div>Movie Title:{title}</div>
              <div>Movie Rating:{rating}</div>
            </div>
          ))
        }
      </div>
      <div onClick={UpdateMovie}>Update Movie</div>
    </div>
  )
}

export default UseStateArrayofObject
