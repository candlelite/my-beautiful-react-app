import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
    users: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    makeMeYounger: (step) => dispatch({type:'AGE_DOWN', value:step})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)
