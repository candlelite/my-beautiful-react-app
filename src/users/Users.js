import React, { Component } from 'react'
import User from './User'

class Users extends Component {

  state = {
    users: [
      { id: 'A', name : 'Alain', age : 10 },
      { id: 'B', name : 'Roger', age : 20 },
      { id: 'C', name : 'Jean', age : 30 }
    ]
  }

  makeMeYounger = () => {
    const newState = this.state.users.map((user) => {
      const tmpUser = user
      tmpUser.age -= 1
      return tmpUser
    })

    this.setState({
      newState
    })
  }

  render() {
    //console.log(this.props);
      return (
        <div>
          <button onClick={this.makeMeYounger}>Make me younger</button>
          <h1>{ this.props.children } </h1>
          <h2>{ this.props.groupe} </h2>
          {this.state.users.map((user) => {
            return <User key={user.id} name={user.name} age={user.age}></User>
          })}
        </div>
      )
    }
}
export default Users
