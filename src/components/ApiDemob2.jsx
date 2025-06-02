import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from './Loader'
import { useFetchApi1 } from '../hooks/FetchApiHook2'


//npm i axios -- fetch
export const ApiDemob2 = () => {

    const {data,loading}=useFetchApi1("https://node5.onrender.com/user/user/")

    const deleteUser =async(id)=>{

      //const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
      const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
      console.log(res)
      if(res.status == 204){
        getUserData()
      }
    }
    

  return (
    <div>
        <h1>API DEMO 1</h1>
        {
          loading && <Loader/>
        }
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d)=>{
                return <tr>
                  <td>{d._id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>{d.email}</td>
                  <td>{d.isActive == true? "ACtive":"Not Active"}</td>
                  <td>
                    <button onClick={()=>{deleteUser(d._id)}} className='btn btn-danger'>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}
