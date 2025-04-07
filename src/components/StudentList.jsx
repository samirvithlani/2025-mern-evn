import React from 'react'
import { MyButton } from './MyButton'

export const StudentList = (props) => {
    console.log("studentList",props)
  return (
    <div>
        <MyButton name="list" class="btn btn-info"></MyButton>
        <h1>STUDENT LIST</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.studentData.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.gender}</td>
                            <td>
                                <button onClick={()=>{props.deleteStudet(stu.id)}} className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
