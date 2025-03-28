
//rafc
import React from 'react'
//<link  rel st href ="">
import "../assets/header.css"

export const Header = (props) => {
  console.log("header...",props)
  //props --> dataType :{object}
  //{title:"val...."}
  return (
    <div className="header">
        <h1>HEADER COMPONENT</h1>
        {props.title} {props.address.city} {props.address.state}
    </div>
  )
}
