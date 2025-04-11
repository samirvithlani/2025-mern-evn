import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
  const id = useParams().id
  //,id /:id
  //.uid /:uid
  //.name /:name
  return (
    <div>
        <h1>TEAM DETAIL - {id}</h1>
    </div>
  )
}
