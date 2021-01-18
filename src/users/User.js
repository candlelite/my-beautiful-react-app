import React from 'react'

const User = (props) => {
  let age = ''
  props.age ? age=props.age : age='NA'

  return (
    <div>
      { props.children } | Name : { props.name } | age : { age }
    </div>
  )
}

export default User
