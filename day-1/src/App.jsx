import React from 'react'
import Greet from './Components/Greet'
import Header from './Components/Header'
import MainComponent from './Components/MainComponent'
import Footer from './Components/Footer'
import WelcomeMessanger from './Components/WelcomeMessanger'
import Greeting from './Components/Greeting'
import Product from './Components/Product'
import UserList from './Components/UserList'
import ProductList from './Components/ProductList'
import Card from './Components/Card'
import photo from './assets/image.png'
import UseStateHook from './Components/States/UseStateHooks/UseStateHook'
const card1 = {
  name:"Sophie Bennett",
  description:"Product Designer who focuses on simplicity & usability",
  image:photo,
  followers:312,
  save:48
}

const App = () => {
  return (
    <div>
       {/* <Greet></Greet>
       <Header></Header>
       <MainComponent></MainComponent>
       <Footer></Footer>
       <WelcomeMessanger></WelcomeMessanger>
       <Greeting></Greeting>
       <Product></Product>
       <UserList></UserList>
       <ProductList></ProductList> */}
       {/* <Card name={card1.name} description={card1.description} image={card1.image} save={card1.save} followers={card1.followers}></Card> */}
       <UseStateHook></UseStateHook>
    </div>
  )
}

export default App