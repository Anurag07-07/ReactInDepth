import React from 'react'
const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];
const ProductList = () => {
  return (
    <div>
      {
        products.map(({id,name,price})=>(
          <div key={id}>
            <div>Product Name:{name}</div>
            <div>Product Price:{price}</div>
          </div>
        ))
      }
      <div>There are {products.length} items are present in the Shop</div>    
    </div>
  )
}

export default ProductList
