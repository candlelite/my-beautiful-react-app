import React, { Component } from 'react'
//$> npm i react-html-id
import uniqueId from 'react-html-id';
import Users from './users/Users'
import Parent from './components/parentToChild/Parent'
import Member from './components/Member'

import './App.css'

class App extends Component {

  constructor() {
      super()
      uniqueId.enableUniqueIds(this)

      this.state = {
        name: "Fred",
        title: "Change The world",
        newMember :"",
        ageNewMember: '',

        members: [
          {id: this.nextUniqueId(), firstname: 'Thierry', age:'32'},
          {id: this.nextUniqueId(), firstname: 'Paul', age:'40'},
          {id: this.nextUniqueId(), firstname: 'Isabelle', age:'25'}
        ]
      }
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

  changeTheWorld = (WhatisChanged) => {
    this.setState({
      title: WhatisChanged
    })
  }

  delEvent = (index) => {
    const members = Object.assign([], this.state.members)
    members.splice(index,1)
    this.setState({members: members})
  }

  changeNewMemberField = (e) => {
    this.setState ({
      newMember: e.target.value
    })
  }

  changeNewMemberAgeField = (e) => {
    this.setState ({
      ageNewMember: e.target.value
    })
  }

  addNewMember = (newMember, ageNewMember) => {
    const members = Object.assign([], this.state.members)
    members.push({id: Math.floor(Math.random()*100000000000000) , firstname: newMember, age: ageNewMember })
    this.setState({members: members, newMember:"", ageNewMember: '',})
  }

  changeEvent = (id, e) => {
    //********* Ma méthode pendant l'exercice *****
    //********* Ma méthode fonctionne *************
    //let index = this.state.members.findIndex(i => i.id === id)
    //const members = Object.assign([], this.state.members)
    //members[index].firstname = e.target.value
    //this.setState({members: members})

    //******* Le corrigé du prof *******************
    const index = this.state.members.findIndex((member) => {
      return member.id === id
    })
    const member = Object.assign({}, this.state.members[index])
    member.firstname = e.target.value
    const members = Object.assign([], this.state.members)
    members[index]=member
    this.setState({members: members})
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
        <br/><br/>
        <Parent
          title={this.state.title}
          changeTheWorldEvent={this.changeTheWorld.bind(this, 'A better world')}
          newTheWorldEvent={this.changeTheWorld.bind(this, 'A NEW world')}
        ></Parent>
        <ul>
          {this.state.members.map((member, index) => {
            return (
              <Member
                key={member.id}
                id={member.id}
                age={member.age}
                delEvent={this.delEvent.bind(this, index)}
                changeEvent={this.changeEvent.bind(this, member.id)}
                >
                {member.firstname}
              </Member>
            )
          })}
          <li><span>
          {this.state.newMember} &nbsp;
          <input type='text' onChange={this.changeNewMemberField} value={this.state.newMember}></input>
          {this.state.ageNewMember} &nbsp;
          <input type='text' onChange={this.changeNewMemberAgeField} value={this.state.ageNewMember}></input>
          <button onClick={this.addNewMember.bind(this, this.state.newMember, this.state.ageNewMember)}>Add new member</button>
          </span></li>
        </ul>
      </div>
    );
  }
}
export default App;
