import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const UseEffectDemo3 = () => {
    const {register,handleSubmit}=useForm()
    useEffect(() => {
      
            //api logic... database chat resp -->
            //sender --> live -->chat -->
            console.log("chat 1")
    }, [chat])
    
    useEffect(() => {
        console.log("chat 2")
    }, [])
    const submitHandler = (data)=>{
        data.id = chat.length + 1
        setchat([...chat,data])
            }
    var [chat, setchat] = useState([{
        id: 1,
        message: "Hello",
        sender: "John"
    },
    {
        id: 2,
        message: "Hi",
        sender: "Doe"
    }])

  return (
    <div>
        <h1>USE EFFECT DEMO 3</h1>
        <h2>Chat</h2>
        <ul>
            {
                chat.map((c) => {
                    return (
                        <li>
                            <b>{c.id} {c.sender}</b> : {c.message}
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>sender</label>
                    <input type="text" {...register("sender")}></input>
                </div>
                <div>
                    <label>message</label>
                    <input type="text" {...register("message")}></input>
                </div>
                <div>
                    <input type="submit" value="Send"></input>
                </div>
            </form>
        </div>
    </div>
  )
}
