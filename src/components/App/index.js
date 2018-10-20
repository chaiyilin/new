import React, { Component } from 'react'
import styled from 'styled-components'

const Parent = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  height: 2em;
  width: 2em;
`

const Child = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  height: 1em;
  width: 1em;
`
class App extends Component {
  render() {
    return (
      <Parent>
        <Child />
      </Parent>
    )
  }
}

export default App
