import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from "../store/actions/actions";
import logo from "../logo.svg";
import User from './User'

class Users extends Component {

  render() {
    //console.log(this.props);
      return (
        <Fragment>
          <div>
            <button onClick={() => this.props.makeMeYounger(3)}>Make me younger</button>
            <h1>{ this.props.children } </h1>
            <h2>{ this.props.groupe} </h2>
            {this.props.users.map((user) => {
              return <User key={user.id} name={user.name} age={user.age}></User>
            })}
            {this.props.loading && <img src={logo} className="App-logo" />}
          </div>
          <div>{ this.props.children }</div>
          {
            this.props.groupe === 'Fedora'
            //? `&lt;div&glt;${this.props.groupe}&lt;/div&glt`
            ? <Fragment>&lt;div&gt;{this.props.groupe}&lt;/div&gt;</Fragment>
            : this.props.groupe
          }
        </Fragment>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    users: state.rUsers.users,
    loading: state.rUsers.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    makeMeYounger: (step) => dispatch(actionCreator.makeMeYounger(step))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)
