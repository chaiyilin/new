import React, { Component } from 'react'
import { Provider } from './Context'
import ComponentNesting from './ComponentNesting'
import './styles.css'

class App extends Component {
  state = {
    values: {}
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: value
      }
    }))
  }

  getStateAndMethods = () => ({
    values: this.state.values,
    onChange: this.onChange
  })

  render() {
    return (
      <div className="App">
        <h1>Provider Pattern</h1>
        <Provider value={this.getStateAndMethods()}>
          <ComponentNesting />
        </Provider>
      </div>
    )
  }
}

export default App
