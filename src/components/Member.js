import React from 'react'
//$> npm i prop-types
import PropTypes from 'prop-types'

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

Member.propTypes = {
  id:PropTypes.number,
  children:PropTypes.string,
  age:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  // tableName:PropTypes.arrayOf(PropTypes.number)
  // tableOfObjectName: PropTypes.arrayOf(PropTypes.shape(
  //  {
  //    name:PropTypes.string,
  //    age.PropTypes.number
  //  }
  // )),
  // children:PropTypes.element,
  // children:PropTypes.element.isRequired
}
