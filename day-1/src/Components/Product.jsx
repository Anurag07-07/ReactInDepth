const prod ={
  name:"Laptop",
  price:"$1200",
  availibilty:"In Stock"
}

const Product = () => {
  return (
    <div>
      <h1>Name {prod.name}</h1>
      <h1>Price {prod.price}</h1>
      <h1>Available {prod['availibilty']}</h1>
    </div>
  )
}

export default Product
