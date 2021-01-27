import React, { Component } from 'react'

type TestProps = {
  name: bool
}

class ChildX extends Component<TestProps> {

  constructor() {
    super()
    console.log('ChildX Component constructor() says COUCOU')
  }

  componentDidMount() {
    console.log('ChildX Component componentDidMount() says COUCOU')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ChildX Component componentDidUpdate() says COUCOU')
    console.log('ChildX prevProps', prevProps)
    console.log('ChildX prevState', prevState)
  }

  componentWillUnmount() {
    console.log('ChildX Component componentWillUnmount() says COUCOU')
  }

  render() {
    console.log('ChildX Component render() says COUCOU')
    return (
      <div>
        ChildX name : {this.props.name}
      </div>
    )
  }
}
export default ChildX
