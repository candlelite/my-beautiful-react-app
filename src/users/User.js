import React from 'react'

const User = (props) => {
  return (
    <div>
      { props.children } | Name : { props.name } | age : { props.age }
    </div>
  )
}

export default User
