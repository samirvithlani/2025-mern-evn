import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'
import { useFetchApi } from '../hooks/FetchApiHook'

export const ApiDemo2 = () => {
    
    const {res,loader}  = useFetchApi("https://node5.onrender.com/user/user")
    
  
    
  return (
    <div>
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
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}
