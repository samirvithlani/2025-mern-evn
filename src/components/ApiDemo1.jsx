import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    
    useEffect(() => {
        getuserData()
    }, [])

    //delete(){
    //getuserData
    //}

    
    const getuserData = async()=>{
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        //Promise<AxiosResponse<any, any>>
        console.log(res) //axios object..
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getuserData()}}>GET</button> */}
        {
            isLoading && <Loader/>
        }
        {message}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                   users.map((user)=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive == true?"Active":"NOt Active"}</td>
                        <td>
                            <button onClick={{}} className='btn btn-danger'>DELETE</button>
                        </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}
