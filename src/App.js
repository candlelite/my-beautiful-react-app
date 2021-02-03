import React, { Component } from 'react'
import { connect } from 'react-redux'
//$> npm i react-router-dom
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Users from './users/Users'
import Parent from './components/parentToChild/Parent'
import Member from './components/Member'
import ChildX from './components/ChildX'
import FormProf from './components/FormProf'
import ButtonOne from './components/ButtonOne'

import './App.css'

const Profile = (params) => {
  return ( <h1> Welcome Profile {params.profilename} </h1>)
}

class App extends Component {

  constructor() {
      super()
      //console.log('App Component constructor() says COUCOU')
      this.state = {
        title: "Change The world",
        loggedIn: false
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
    //console.log('App Component componentDidMount() says COUCOU')
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('App Component componentDidUpdate() says COUCOU')
    //console.log('App prevProps', prevProps)
    //console.log('App prevState', prevState)
  }

  componentWillUnmount() {
    //console.log('App Component componentWillUnmount() says COUCOU')
  }

  changeNameFromInput = (event) => {
    this.props.changeName(event.target.value)
  }

  changeTheWorld = (WhatisChanged) => {
    this.setState({
      title: WhatisChanged
    })
  }

  render() {
    //console.log('App Component render() says COUCOU')
    if(this.props.name === 'unMount') {
      return (<div/>)
    }

    return (
      <Router>
      <ButtonOne disable/>
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
            }>Profile John</NavLink>
          </li>
          <li>
            <NavLink to="/profile/peter" exact activeStyle={
              { color:'green' }
            }>Profile Peter</NavLink>
          </li>
          <li>
            <NavLink to="/formprof" exact activeStyle={
              { color:'green' }
            }>Ref</NavLink>
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
        <Route path="/profile/:profilename" exact strict render={({match})=>(
          this.state.loggedIn ? ( <Profile profilename={match.params.profilename}/>) : (<Redirect to='/' />)
        )}/>
      <Route path="/formprof" exact strict component={FormProf}/>

        <br/><br/>
        <Users groupe='Fedora'>Users List</Users>
        <br/><br/>
        <button onClick={() => this.props.changeName("Super Fred :(")}>Change name using annon function</button>
        <button onClick={this.props.changeName.bind(this, "Super Fred :)")}>Change name using bind function</button>
        <br/><br/>
        <input type='text' onChange={this.changeNameFromInput} value={this.props.name}></input>
        <h3>{ this.props.name }</h3>
        <br/><br/>
        <Parent
          title={this.state.title}
          changeTheWorldEvent={this.changeTheWorld.bind(this, 'A better world')}
          newTheWorldEvent={this.changeTheWorld.bind(this, 'A NEW world')}
        ></Parent>
        <ul>
          {this.props.members.map((member) => {
            return (
              <Member
                key={member.id}
                id={member.id}
                age={member.age}
                delEvent={this.props.delEvent.bind(this, member.id)}
                changeEvent={this.props.changeEvent.bind(this, member.id)}
                >
                {member.firstname}
              </Member>
            )
          })}
          <li><span>
          {this.props.newMember} &nbsp;
          <input type='text' onChange={this.props.changeNewMemberField} value={this.props.newMember}></input>
          {this.props.ageNewMember} &nbsp;
          <input type='text' onChange={this.props.changeNewMemberAgeField} value={this.props.ageNewMember}></input>
          <button onClick={this.props.addNewMember.bind(this, this.props.newMember, this.props.ageNewMember)}>Add new member</button>
          </span></li>
        </ul>
        <br/><br/>
        <ChildX name = {this.props.name}></ChildX>
        <button onClick={this.props.changeName.bind(this,"unMount")}>Test unmount ChlidX</button>
      </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    newMember : state.newMember,
    ageNewMember: state.ageNewMember,
    members: state.members
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (newName) => dispatch({type:'CHANGE_NAME', value:newName}),

    delEvent: (index) => dispatch({type: 'DEL_EVENT', value: index}),
    changeNewMemberField: (e) => dispatch({type: 'CHANGE_NEW_MEMBER_FIELD', value: e}),
    changeNewMemberAgeField: (e) => dispatch({type: 'CHANGE_NEW_MEMBER_AGE_FIELD', value: e}),
    addNewMember: (newMember, ageNewMember) => dispatch({type: 'ADD_NEW_MEMBER'}),
    changeEvent: (id, e) => dispatch({type: 'CHANGE_EVENT', value:  { id, e }})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
