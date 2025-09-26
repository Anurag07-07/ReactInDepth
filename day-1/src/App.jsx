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
import UseStateArray from './Components/States/UseStateHooks/UseStateArray'
import UseStateObject from './Components/States/UseStateHooks/UseStateObject'
import UseStateArrayofObject from './Components/States/UseStateHooks/UseStateArrayofObject'
import ComponentOne from './Components/States/UseStateHooks/PassingComponent/ComponentOne'
import ComponentTwo from './Components/States/UseStateHooks/PassingComponent/ComponentTwo'
import UseStateFnction from './Components/States/UseStateHooks/UseStateFnction'
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
       {/* <UseStateHook></UseStateHook> */}
       {/* <UseStateArray></UseStateArray>
       <UseStateObject></UseStateObject> */}
       <UseStateArrayofObject></UseStateArrayofObject>
       <ComponentTwo></ComponentTwo>
       <UseStateFnction></UseStateFnction>
    </div>
  )
}

export default App