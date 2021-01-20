import React from 'react'
import Child from './Child'

const Parent = (props) => {

  return (
    <div>
      <Child doWhatEver = {props.changeTheWorldEvent} title={props.title}></Child>
      <Child doWhatEver = {props.newTheWorldEvent} title={props.title}></Child>
    </div>
  )
}
export default Parent
