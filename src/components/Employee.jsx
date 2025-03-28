import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = (props) => {
    console.log("emp props",props)

    const test = ()=>{
        alert("test function called...")
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE COMPONENET</h1>
        <button onClick={test}>CLICK</button>
        <button onClick={()=>{test()}}>click 2</button>
        <EmployeeList title = {props.title} test = {test}></EmployeeList>
    </div>
  )
}
