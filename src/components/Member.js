import React from 'react'

const Member = (props) => {

  return (
    <li><span>
      Firstname : {props.children} | Age : {props.age} &nbsp;
      <input onChange={props.changeEvent}></input>
      <button onClick={props.delEvent}>delete</button>
    </span></li>
  )
}
export default Member
