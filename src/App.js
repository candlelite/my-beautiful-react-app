import React, { Component } from 'react'
//$> npm i react-router-dom
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom'
import Route from 'react-router-dom/Route'
//$> npm i react-html-id
import uniqueId from 'react-html-id';
import Users from './users/Users'
import Parent from './components/parentToChild/Parent'
import Member from './components/Member'
import ChildX from './components/ChildX'

import './App.css'


const Profile = ({match}) => {
  console.log(match)
  return (
    <h1>Welcome to my profile page {match.params.profilename}</h1>
  )
}

class App extends Component {

  constructor() {
      super()
      console.log('App Component constructor() says COUCOU')

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
        ],

        loggedIn: false,
      }
  }

  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn
    }))
  }

  // componentWillMount() is deprecated
  // componentWillReceiveProps() is deprecated
  // shouldComponentUpdate() is deprecated - Voir getDerivedStateFromProps
  // componentWillUpdate() is deprecated

  componentDidMount() {
    console.log('App Component componentDidMount() says COUCOU')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App Component componentDidUpdate() says COUCOU')
    console.log('App prevProps', prevProps)
    console.log('App prevState', prevState)
  }

  componentWillUnmount() {
    console.log('App Component componentWillUnmount() says COUCOU')
  }

  unmountChildX() {
    this.setState ({name: 'unMount'})
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
    console.log('App Component render() says COUCOU')
    if(this.state.name === 'unMount') {
      return (<div/>)
    }

    return (
      <Router>
      <div className="App">

        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color:'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color:'green' }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/profile/john" exact activeStyle={
              { color:'green' }
            }>User John</NavLink>
          </li>
          <li>
            <NavLink to="/profile/peter" exact activeStyle={
              { color:'green' }
            }>User Peter</NavLink>
          </li>
        </ul>
        <Prompt
          when={!this.state.loggedIn}
          message={(location)=>{
             return location.pathname.startsWith('/profile') ? 'Are you sure?' : true
           }}
        />
        <input type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>

        <Route path="/" exact strict render={
          () => {
            return ( <h1>Welcome Home</h1>);
          }
        }/>
        <Route path="/about" exact strict render={
          () => {
            return ( <h1>About</h1>);
          }
        }/>
        <Route path="/profile/:profilename" exact strict component={Profile}/>

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
        <br/><br/>
        <ChildX name = {this.state.name}></ChildX>
        <button onClick={this.unmountChildX.bind(this)}>Test unmount ChlidX</button>
      </div>
      </Router>
    );
  }
}
export default App;
