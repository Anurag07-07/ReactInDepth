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
import List from './Components/States/List'
import Assignment1 from './Components/States/UseStateAssignment/Assignment1'
import Assignment2 from './Components/States/UseStateAssignment/Assignment2'
import Assingment3 from './Components/States/UseStateAssignment/Assingment3'
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
       {/* <UseStateArrayofObject></UseStateArrayofObject>
       <ComponentTwo></ComponentTwo>
       <UseStateFnction></UseStateFnction> */}
       {/* <List></List> */}
        {/* <Assignment1></Assignment1> */}
        <Assignment2></Assignment2>
        <Assingment3></Assingment3>
    </div>
  )
}

export default App