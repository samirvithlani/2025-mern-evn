import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [userList, setuserList] = useState(["ram","shyam","amit","sumit"]) //array
    const addUSer  = ()=>{
        
        // var x = userList.push("abcd") //x =5 -->number
        // console.log("x",x)
        // setuserList(x) // numner

        //spread operator..
        var x = [...userList,"abcd"]
        setuserList(x)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DMEO3</h1>
        <ul>
            {
                userList.map((user)=>{
                    return <li>{user}</li>
                })
            }
        </ul>
        <button onClick={()=>{addUSer()}}>ADD</button>
    </div>
  )
}
