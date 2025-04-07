import React from 'react'

export const MyButton = (props) => {
  return (
    <button onClick={()=>{props.funName()}} className={props.class || "btn btn-primary"}>{props.name || "button"}</button>
  )
}
