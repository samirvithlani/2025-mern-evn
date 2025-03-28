import React from 'react'

export const EmployeeList = (props) => {
    console.log("employeeList props",props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE LIST</h1>
        {/* //function all buttton */}
        <button onClick={()=>{props.test()}}>TEST in CHILD</button>
    </div>
  )
}
