import React from 'react'

export const MapDemo3 = () => {
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
        },
        {
            id:4,
            name:"dashrath",
            age:62,
            salary:435456,
            gender:"male"
        }
    ]
  return (
    <div style={{textAlign:"center"}}>
            <h1>MAP DEMO 2 - employee list</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((emp)=>{
                            return <tr style={{backgroundColor:emp.gender =="female"&&"pink"}}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>
                                    {/* <span style={{color:emp.age>=24 ? "green" :"white"}}>{emp.age}</span> */}
                                    <span style={{color:emp.age>=24 && "green"}}>{emp.age}</span>
                                    {
                                        emp.age>=60 && <span>Sr Citizen</span>
                                    }
                                </td>
                                <td style={{backgroundColor:emp.salary>=40000 && "yellow"}}>{emp.salary}</td>
                                <td>{emp.gender}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
