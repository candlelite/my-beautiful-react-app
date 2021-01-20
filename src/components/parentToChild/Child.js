import React from 'react'

const Child = (props) => {

  return (
    <div>
      <button onClick={props.doWhatEver}>{props.title}</button>
    </div>
  )
}
export default Child
