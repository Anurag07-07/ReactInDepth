import React, { useEffect, useState } from 'react'

const FetchApi = () => {

  const [data,setData] = useState([])

  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      const data = await response.json()
      setData(data.meals)
    }
    getData()
  },[])
  console.log(data);
  
  return (
    <div className=' grid grid-cols-4'>
      {
        data.map(({strMeal,strMealThumb,idMeal})=>{
          return <div className=' flex flex-col'>
            <div>{strMeal}</div>
            <img className=' w-36 h-36' src={strMealThumb}></img>
            <div>{`#${idMeal}`}</div>
          </div>
        })
      }
    </div>
  )
}

export default FetchApi
