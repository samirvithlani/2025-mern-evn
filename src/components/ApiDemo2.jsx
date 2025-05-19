import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'
import { useFetchApi } from '../hooks/FetchApiHook'
import { toast, ToastContainer, Zoom } from 'react-toastify'

export const ApiDemo2 = () => {
    
    const {res,loader,refetch}  = useFetchApi("https://node5.onrender.com/user/user")
    const deleteUser = async(id)=>{
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
        console.log(res)
        if(res.status==204){
            //alert("record deleted...")
            //getapi
            refetch()
            toast("record deleted....")
            
        }
    }
  
    
  return (
    <div>
         <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
        <h1>API DEMO 1</h1>
        
        {
            loader && <Loader></Loader>
        }
        
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
                   res?.data?.data?.map((user)=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive == true?"Active":"NOt Active"}</td>
                        <td>
                            <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                        </td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}
