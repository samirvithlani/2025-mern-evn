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
import { UseMemoDemo } from './components/UseMemoDemo'
import { FindBomb } from './components/FindBomb'
import { FormDemo1 } from './components/FormDemo1'
import { FormDemo2 } from './components/FormDemo2'
import { FormDemo3 } from './components/FormDemo3'
import { FormDemo4 } from './components/FormDemo4'
import { FormDemo5 } from './components/FormDemo5'
import { UseEffectDemo } from './components/UseEffectDemo'
import { UseEffectDemo2 } from './components/UseEffectDemo2'
import { UseEffectDemo3 } from './components/UseEffectDemo3'
import { ApiDemo1 } from './components/ApiDemo1'
import { ApiDemo2 } from './components/ApiDemo2'
import { ApiDemo3 } from './components/ApiDemo3'
import { ApiDemo4 } from './components/ApiDemo4'

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
        <Route path="/usememo" element ={<UseMemoDemo/>}></Route>
        {/* :id wild card char */}
        <Route path='/teamdetail/:id' element ={<TeamDetail/>}></Route>
        <Route path = "/findbomb" element = {<FindBomb/>}></Route>
        <Route path='/formdemo1'element = {<FormDemo1/>} ></Route>
        <Route path='/formdemo2'element = {<FormDemo2/>} ></Route>
        <Route path='/formdemo3' element = {<FormDemo3/>}></Route>
        <Route path='/formdemo4' element = {<FormDemo4/>}></Route>
        <Route path='/formdemo5' element = {<FormDemo5/>}></Route>
        <Route path='/useeffectdemo' element = {<UseEffectDemo3/>}></Route>
        <Route path='/apidemo1' element = {<ApiDemo2/>}></Route>
        <Route path='/apidemo3' element = {<ApiDemo4/>}></Route>
        {/* <Route path='/*' element ={<h1>404</h1>}></Route> */}
        <Route path='/*' element ={<Error404/>}></Route>
      </Routes>
      
     
   </div>
  )
}

export default App
