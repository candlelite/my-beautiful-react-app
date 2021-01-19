import React, { Component } from 'react'
import Users from './users/Users'
import './App.css'

class App extends Component {

  state = {
    name: "Fred"
  }

  changeName = (newName) => {
    this.setState ({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState ({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br/><br/>
        <Users groupe='Fedora'>Users List</Users>
        <br/><br/>
        <button onClick={() => this.changeName("Super Fred :(")}>Change name using annon function</button>
        <button onClick={this.changeName.bind(this, "Super Fred :)")}>Change name using bien function</button>
        <br/><br/>
        <input type='text' onChange={this.changeNameFromInput} value={this.state.name}></input>
        <h3>{ this.state.name }</h3>
      </div>
    );
  }
}
export default App;
