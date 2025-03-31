import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count = 0;
    const[count,setCount]=useState(0) // 0 inital value...
    //count -> state variable..
    //setCount --> function : to make any changes count variable ---. setCount..

    const increseCount = ()=>{

        //count++
        setCount(count+1)
        console.log("count...",count)
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo</h1>
        <h1>COUNT = {count}</h1>
        <button onClick={()=>{increseCount()}}>INCRESE</button>
    </div>
  )
}
