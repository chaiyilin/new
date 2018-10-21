import React, { Component, Fragment } from 'react'
import { Consumer } from './Context'

class AnotherComponentNesting extends Component {
  render() {
    return (
      <div>
        <h4>Another Component Nesting</h4>
        <p>Here we need to access the App compnents values so we need a Consumer</p>
        <Consumer>
          {({ values, onChange }) => (
            <Fragment>
              <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={values.name} onChange={onChange} />
              </div>

              <div>
                <label htmlFor="Age">Age: </label>
                <input type="number" id="age" name="age" value={values.age} onChange={onChange} />
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Fragment>
          )}
        </Consumer>
      </div>
    )
  }
}

export default AnotherComponentNesting
