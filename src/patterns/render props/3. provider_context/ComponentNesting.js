import React, { Component } from 'react'
import AnotherComponentNesting from './AnotherComponentNesting'

class ComponentNesting extends Component {
  render() {
    return (
      <div>
        <h4>Component Nesting</h4>
        <p>
          This is the first Component. <br />
          We do not need to pass props here to <code>AnotherComponentNesting</code> because of the Provider Pattern!
        </p>
        <AnotherComponentNesting />
      </div>
    )
  }
}

export default ComponentNesting
