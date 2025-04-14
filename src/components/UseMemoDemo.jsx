import React, { useMemo, useState } from 'react'

// var randomNO1 = Math.floor(Math.random()*100)
// console.log("random..1",randomNO1)
export const UseMemoDemo = () => {
    
    const [loader, setloader] = useState(false)
    //useMemo ->1st param function...
    //param []
    var randomNo = useMemo(()=>{return Math.floor(Math.random()*100)},[loader])
    console.log(randomNo)
    const [count, setcount] = useState(0)
    

  return (
    <div>
        <h1>USE MEMO DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{setloader(true)}}>start..</button>
        
    </div>
  )
}

