import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ApiDemo3 = () => {

  const navigate = useNavigate()


    const addUser = async()=>{
        const userObj = {
             name:"rama",
             age:25,
             email:"rama@gmail.com",
             status:true
        }

        //post (url,object)
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res)//axios object
        console.log(res.data) // api response..
        if(res.status ==201){
          navigate("/apidemo1")
            //alert("user added successfully...")
        }
    }
  return (
    <div>
        <h1>API DEMO 3</h1>
        <button onClick={()=>{addUser()}}>POST</button>
    </div>
  )
}
