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
import { Route, Routes } from 'react-router-dom'
import { Navabar } from './components/Navabar'
import { TeamList } from './components/ipl/TeamList'
import { Players } from './components/ipl/Players'
import { IPL } from './components/ipl/IPL'
import { Error404 } from './components/Error404'
import { TeamDetail } from './components/ipl/TeamDetail'

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
    <Navabar></Navabar>

      <Routes>
        <Route path='/' element = {<IPL/>}></Route>
        <Route path='/students' element = {<Students/>}></Route>
        <Route path='/usestatedemo' element = {<UseStateDemo/>}></Route>
        <Route path='/teams' element ={<TeamList/>}></Route>
        <Route path='/players' element = {<Players/>}></Route>
        {/* :id wild card char */}
        <Route path='/teamdetail/:id' element ={<TeamDetail/>}></Route>
        {/* <Route path='/*' element ={<h1>404</h1>}></Route> */}
        <Route path='/*' element ={<Error404/>}></Route>
      </Routes>
      
     
   </div>
  )
}

export default App
