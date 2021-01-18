import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.children } </h1>
        <User name='Alain' age='20'> enfant 1 </User>
        <User name='Jean' age='30'>enfant 2 </User>
      </div>
    )
  }
}

export default Users
