import React, { useState } from 'react'
import { SubCompnay } from './SubCompnay'
import { CompnayContext } from './compnayContext'

export const Compnay = () => {
  const [data, setdata] = useState([
    {
      id:1,
      name:"GOOGLE",
    },
    {
      id:2,
      name:"FB"
    },
    {
      id:3,
      name:"INSTA"
    }
  ])
  const [title, settitle] = useState("ROYAL")
  const deleteCompnay  =(id)=>{

     var x = data.filter((d)=>d.id!==id)
    setdata(x)
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>COMPNAY COMPONENT:</h1>
        <CompnayContext.Provider  value={{data,title,deleteCompnay}}>
          <SubCompnay></SubCompnay>
          
        </CompnayContext.Provider>
    </div>
  )
}
