// import React, { useState } from 'react'

// const UseStateArrayofObject = () => {
//   const [movies,setMovies] = useState([
//     {id:1,title:"Spiderman",rating:3},
//     {id:2,title:"Batman",rating:6}
//   ])

//   function UpdateMovie() {
//     const data = movies.map((m)=>m.id === 1 ? {...movies,title:"John Wick 5"}:m)
//     setMovies(data)
//   }

//   return (
//     <div>
//       <div>
//         {
//           movies.map(({id,title,rating})=>(
//             <div key={id}>
//               <div>Movie Title:{title}</div>
//               <div>Movie Rating:{rating}</div>
//             </div>
//           ))
//         }
//       </div>
//       <div onClick={UpdateMovie}>Update Movie</div>
//     </div>
//   )
// }

// export default UseStateArrayofObject


import React, { useState } from 'react'

const UseStateArrayofObject = () => {
  const [movies,setMovies] = useState([
    {id:1,movie:"John Wick",rating:5},
    {id:2,movie:"Spiderman",rating:4}
  ])

  function updateHandler(){
    const movie = movies.map((m)=>m.id===1?{...m,movie:"Fast and Furious"}:m) 
    setMovies(movie)
  }

  return (
    <div>
      <div>
        {
          movies.map(({id,movie,rating})=>{
            return <div key={id}>
              <div>{movie}</div>
              <div>{rating}</div>
            </div>
          }) 
        }
      </div>
      <div onClick={updateHandler}>
        Update Movie
      </div>
    </div>
  )
}

export default UseStateArrayofObject
