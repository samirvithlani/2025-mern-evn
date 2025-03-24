  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from './components/Header'
import Content from "./components/Content"
import { Footer } from './components/Footer'
import { MapDemo } from './components/MapDemo'
import { MapDemo2 } from './components/MapDemo2'

function App() {
  
  return (
   <div>
      <Header></Header>
      {/* <Content></Content> */}
      {/* <MapDemo></MapDemo> */}
      <MapDemo2></MapDemo2>
      {/* <Footer></Footer> */}
   </div>
  )
}

export default App
