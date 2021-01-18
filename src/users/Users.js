import React, { Component } from 'react'
import User from './User'

class Users extends Component {
  render() {
    if(this.props.groupe==='Fedora') {
      return (
        <div>
          <h1>{ this.props.children } </h1>
          <h2>{ this.props.groupe} </h2>
          <User name='Alain' age='20'> enfant 1 </User>
          <User name='Jean' age='30'>enfant 2 </User>
          <User name='Roger'>enfant 2 </User>
        </div>
      )
    } else if (this.props.groupe==='CentOS') {
      return (
        <div>
        <h1>{ this.props.children } </h1>
        <h2>{ this.props.groupe} </h2>
        <User name='Paul' age='20'> enfant 1 </User>
        <User name='Pierre' age='30'>enfant 2 </User>
        <User name='Jacques'>enfant 2 </User>
      </div>
    )
    }
  }
}

export default Users
