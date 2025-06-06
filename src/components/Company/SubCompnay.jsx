import React, { useContext } from 'react'
import { SubSubCompnay } from './SubSubCompnay'
import { CompnayContext } from './compnayContext'

export const SubCompnay = () => {
  const {data} = useContext(CompnayContext)
  return (
    <div>
        <h1>SUB COMPNAY</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d)=>{
                return <tr>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        <SubSubCompnay></SubSubCompnay>
        
    </div>
  )
}
