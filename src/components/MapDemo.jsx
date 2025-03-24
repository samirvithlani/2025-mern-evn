import React from 'react'

export const MapDemo = () => {
    //json array..
    const employees = [
        {
            id:1,
            name:"ram",
            age:23,
            salary:23456,
            gender:"male"
        },
        {
            id:2,
            name:"seeta",
            age:24,
            salary:33456,
            gender:"female"
        },
        {
            id:3,
            name:"maruti",
            age:25,
            salary:43456,
            gender:"male"
        }
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO</h1>
        {
            employees.map((emp)=>{
                return <li>{emp.id} {emp.name} {emp.salary}</li>
            })
        }
    </div>
  )
}
