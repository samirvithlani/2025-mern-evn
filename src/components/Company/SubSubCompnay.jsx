import React, { useContext } from 'react'
import { CompnayContext } from './compnayContext'

export const SubSubCompnay = () => {
  const {data,title,deleteCompnay} = useContext(CompnayContext)
  return (
    <div>
        <h1>SubSubCompnay -{title}</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d)=>{
                return <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>
                    <button onClick={()=>{deleteCompnay(d.id)}} className='btn btn-danger'>DELETE</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}
