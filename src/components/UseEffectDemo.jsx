import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()=>{}call back function
    //[] dependency array
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("use effect called")
    },[count])
  return (
    <div>
        <h1>USE EFFETC DEMO</h1>
        <h1>count = {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}
