  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from './components/Header'
import Content from "./components/Content"
import { Footer } from './components/Footer'
import { MapDemo } from './components/MapDemo'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { Employee } from './components/Employee'
import { UseStateDemo } from './components/UseStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { Students } from './components/Students'
import { MyButton } from './components/MyButton'

function App() {
  

  const appFun = ()=>{
    alert("app function..")
  }
    var title= "React-js"
    var address = {
      city:"Ahmedabad",
      state:"Gujarat"
    }
  //app --> header
// p ---> c
  return (
   <div style={{textAlign:"center"}}>
    <MyButton name="app" funName = {appFun}></MyButton>
      <Header title ={title} address = {address}></Header>
      {/* <Employee title = {title}></Employee> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      {/* <UseStateDemo3></UseStateDemo3> */}
      <Students/>
      {/* <Content></Content> */}
      {/* <MapDemo></MapDemo> */}
      {/* <MapDemo2></MapDemo2> */}
      {/* <MapDemo3></MapDemo3> */}
      <Footer></Footer>
   </div>
  )
}

export default App
