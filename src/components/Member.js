import React from 'react'

const Member = (props) => {

  return (
    <li><span>
      ID : {props.id} &nbsp;
      Firstname : {props.children} | Age : {props.age} &nbsp;
      <input onChange={props.changeEvent} value={props.children}></input>
      <button onClick={props.delEvent}>delete</button>
    </span></li>
  )
}
export default Member
