import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    return <img alt="cat" src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
  }
}
Cat.propTypes = {
  mouse: PropTypes.Object
}
export class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}
Mouse.propTypes = {
  children: PropTypes.func
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse>{mouse => <Cat mouse={mouse} />}</Mouse>
      </div>
    )
  }
}
