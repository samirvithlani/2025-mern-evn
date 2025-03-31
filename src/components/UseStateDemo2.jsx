import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true)//boolean
    const stopLoader =() =>{
        setisLoading(false)
    }
    setTimeout(() => {
        //alert("ok...")
        setisLoading(false)
    }, 3000);
  return (
    <div style={{textAlign:"center"}}>
        <h1>useState demo 2</h1>
        {
            isLoading == true && <h1>Loading...</h1>
        }
        <button onClick={()=>{stopLoader()}}>stop</button>
        <button onClick={()=>{setisLoading(false)}}>stop1</button>
    </div>
  )
}
