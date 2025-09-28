import React, { useState } from 'react'

const Assignment4 = () => {
  const [shoppingList,setShoppingList] = useState([])
  const [items,setItems] = useState({
    item:"",
    quantity:""
  })

  function submitHandler(e){
    e.preventDefault()
    setShoppingList((prev)=>([...prev,items]))
    setItems({
      item:"",
      quantity:""
    })
  }

  function changeHandler(e){
    const {name,value} = e.target
    setItems((prev)=>({...prev,[name]:value}))
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='item'>Item:
          <input type='text' name='item' id='item'  value={items.item} placeholder='Enter The Item' onChange={changeHandler}></input>
        </label>
        <label htmlFor='quantity'>:
          <input type='text' name='quantity' value={items.quantity} placeholder='Enter The Quantity' onChange={changeHandler}></input>
        </label>
        <button type='submit'>Submit</button>
      </form>
      <div>Product List</div>
      <div>
        {
          shoppingList.map((l,index)=>(
            <div key={index}>
              <div>{l.item}</div>
              <div>{l.quantity}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Assignment4
