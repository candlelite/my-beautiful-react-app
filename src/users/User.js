import React from 'react'

const User = (props) => {
  let age = ''
  props.age && props.age >=0 ? age=props.age : age='NA'
  //console.log(props)
  return (
    <div>
      { props.children } | Name : { props.name } | age : { age }
    </div>
  )
}
export default User
