import React, { useState } from 'react'
import { StudentList } from './StudentList'

export const Students = () => {
    const [studentData, setstudentData] = useState([
        {
            id:1,
            name:"ram",
            age:23,
            gender:"male"
        },
        {
            id:2,
            name:"shyam",
            age:22,
            gender:"male"
        },
        {
            id:3,
            name:"hari",
            age:22,
            gender:"male"
        }
    ])

    const deleteStudet = (id)=>{
        //alert(id)

        //id= 1
        //id =2 TRUE
        //id = 3 TRUE

        // var x = studentData.filter((stu)=>stu.id !== id)
        // console.log(x)
        // setstudentData(x)
        
        setstudentData(()=>{
            return studentData.filter((stu)=> stu.id !== id)
        })

    }
  return (
    <div>
        <h1>STUDENTS</h1>
        <StudentList studentData = {studentData} deleteStudet = {deleteStudet}></StudentList>
    </div>
  )
}
